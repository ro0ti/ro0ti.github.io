document.addEventListener('DOMContentLoaded', function() {
    const files = [
        { name: 'Giveaway Tool', type: 'Folder', date: '06-11-2025', size: '--', icon: 'folder', link: './tools/TTG/giveaway.html' }
    ];
    const fileList = document.getElementById('file-list');
    files.forEach(file => {
        const fileItem = document.createElement('div');
        fileItem.className = 'file-item';
        const iconClass = file.icon === 'folder' ? 'fas fa-folder' : `fas fa-${file.icon}`;
        fileItem.innerHTML = `
            <div class="file-name">
                <a href="${file.link}" style="text-decoration:none;">
                    <i class="${iconClass} file-icon"></i>
                    <span>${file.name}</span>
                </a>
            </div>
        `;
        fileList.appendChild(fileItem);
    });
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            navItems.forEach(i => i.classList.remove('active'));
            this.classList.add('active');
        });
    });
});