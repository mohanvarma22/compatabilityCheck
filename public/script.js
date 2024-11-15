function uploadFolder() {
    const folderInput = document.getElementById('folderInput');
    const formData = new FormData();

    for (let i = 0; i < folderInput.files.length; i++) {
        formData.append('folder', folderInput.files[i]);
    }

    fetch('/upload', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(result => {
        document.getElementById('result').innerHTML = result.length > 0 
            ? result.join('<br>')  // Display incompatible versions
            : 'All dependencies are compatible.';
    })
    .catch(error => {
        console.error('Error:', error);
        document.getElementById('result').innerHTML = 'An error occurred during the upload.';
    });
}
