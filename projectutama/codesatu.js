/**
 * FUNGSI PENTING: Menangani permintaan preflight CORS (OPTIONS).
 * Ini wajib ada agar browser mengizinkan permintaan dari Firebase.
 */
function doOptions(e) {
  return ContentService.createTextOutput()
    .withHeaders({
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type'
    });
}



const FOLDER_ID = "1Y_Iqg7OQnnR8D9cHGkuwPyLsLHVoXCOj"; 
const SHEET_NAME = "Sheet1";
const PRIVATE_SHEET_ID = "150XbMyLIudOedSEvXapwDFyhfrZy6MvGROFR9U2XJK8"; 

function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    let audioUrl = "Tidak ada rekaman"; // Nilai default

    // Proses dan unggah file audio jika ada
    if (data.audioData && data.audioMimeType) {
      const decodedAudio = Utilities.base64Decode(data.audioData);
      const audioBlob = Utilities.newBlob(decodedAudio, data.audioMimeType, `Rekaman_${data.anggota}_${new Date().toISOString()}.webm`);
      
      const folder = DriveApp.getFolderById(FOLDER_ID);
      const audioFile = folder.createFile(audioBlob);
      
      audioFile.setSharing(DriveApp.Access.ANYONE_WITH_LINK, DriveApp.Permission.VIEW); // Agar bisa diakses
      audioUrl = audioFile.getUrl();
    }
    
    // Mengakses kedua sheet
    const publicSheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET_NAME);
    const privateSheet = SpreadsheetApp.openById(PRIVATE_SHEET_ID).getSheetByName(SHEET_NAME);
    
    // Data untuk sheet publik (tanpa data sensitif)
    const publicRow = [ new Date(), data.coach, data.anggota, audioUrl, data.Health, data.Academic, data.Family, data.Friends, data.Religion, data.Organization, data.SelfLove, data.Learning, data.Finances, data.Spirit ];
    
    // Data untuk sheet privat (semua data, termasuk link audio)
    const privateRow = [ new Date(), data.coach, data.anggota, data.browserId, data.ipAddress, audioUrl, data.Health, data.Academic, data.Family, data.Friends, data.Religion, data.Organization, data.SelfLove, data.Learning, data.Finances, data.Spirit ];

    publicSheet.appendRow(publicRow);
    privateSheet.appendRow(privateRow);

    // Kirim respons sukses sederhana kembali ke front-end
    return ContentService
      .createTextOutput(JSON.stringify({ "status": "success", "message": "Data received" }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    Logger.log(error.toString()); // Catat error untuk debugging
    return ContentService
      .createTextOutput(JSON.stringify({ "status": "error", "message": error.message }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
