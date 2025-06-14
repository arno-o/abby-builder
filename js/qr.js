const $qrCode = document.getElementById('identityQR');

const identityData = {
        id: Date.now().toString(),
        g1: 1,
        g2: 0.8,
        g3: 0.5,
        g4: 0,
        g5: 0.3,
        g6: 0.4,
};

console.log('hello');

const generateQRCode = (identityData) => {
    const jsonString = JSON.stringify(identityData);
    const encodedData = encodeURIComponent(jsonString);
    const qrCodeUrl = `https://quickchart.io/qr?text=${encodedData}&size=300&margin=1&format=svg&light=0000`;
    console.log(qrCodeUrl);
    $qrCode.src = qrCodeUrl;
};

generateQRCode(identityData);