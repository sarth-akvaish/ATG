var modal = document.getElementById('signupModal');

// Function to open the modal
function openModal() {
    modal.style.display = 'block';
}

// Function to close the modal
function closeModal() {
    modal.style.display = 'none';
}

// Close the modal when the user clicks outside of it
window.onclick = function(event) {
    if (event.target == modal) {
        closeModal();
    }
}

var modal1 = document.getElementById('signinModal');

// Function to open the modal
function openModal1() {
    modal1.style.display = 'block';
}

// Function to close the modal
function closeModal1() {
    modal1.style.display = 'none';
}

// Close the modal when the user clicks outside of it
window.onclick = function(event) {
    if (event.target == modal1) {
        closeModal1();
    }
}