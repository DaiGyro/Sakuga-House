function uploadFile() {
    const fileInput = document.getElementById('fileInput');
    const file = fileInput.files[0];
    
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const clips = document.getElementById('clips');
            const clipElement = document.createElement('div');
            clipElement.className = 'clip';
            clipElement.innerText = file.name;
            clips.appendChild(clipElement);
        };
        reader.readAsDataURL(file);
    }
}
