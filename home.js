// show insitals if no photo
const img = document.getElementById('profilephoto');
img.onload = () => {
    img.style.display = 'block';
    document.getElementById('avatarInitials').style.display = 'none';
};

function submitForm() {
    const name = document.getElementById('clientName').value.trim();
    const phone = document.getElementById('clientPhone').value.trim();
    const service = document.getElementById('service').value;

    if (!name || !phone || !service) {
        alert('Please fill in your name, phone number, and service.');
        return;
    }

    document.getElementById('formWrap').style.display = 'none';
    document.getElementById('successMsg').style.display = 'block';
}