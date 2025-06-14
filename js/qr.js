const $qrCode = document.getElementById('identityQR');

const storedValues = JSON.parse(localStorage.getItem('identityValues'));

const identityData = {
    id: Date.now().toString(), 
    ...storedValues             
};

console.log(identityData);

console.log('hello');

const generateQRCode = (identityData) => {
    const jsonString = JSON.stringify(identityData);
    const encodedData = encodeURIComponent(jsonString);
    const qrCodeUrl = `https://quickchart.io/qr?text=${encodedData}&size=300&margin=1&format=svg&light=0000`;
    console.log(qrCodeUrl);
    $qrCode.src = qrCodeUrl;
};

generateQRCode(identityData);