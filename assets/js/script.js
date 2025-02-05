// Función para cargar los enlaces guardados
function loadLinks() {
    const links = JSON.parse(localStorage.getItem('links')) || [];
    const linkList = document.getElementById('saved-links');
    linkList.innerHTML = '';

    links.forEach((link, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
            <a href="${link.url}" target="_blank">${link.name}</a>
            <button onclick="deleteLink(${index})">Eliminar</button>
        `;
        linkList.appendChild(li);
    });
}

// Función para agregar un enlace
document.getElementById('add-link').addEventListener('click', () => {
    const linkName = document.getElementById('link-name').value.trim();
    const linkUrl = document.getElementById('link-url').value.trim();

    if (linkName && linkUrl) {
        const links = JSON.parse(localStorage.getItem('links')) || [];
        links.push({ name: linkName, url: linkUrl });
        localStorage.setItem('links', JSON.stringify(links));

        loadLinks(); // Recargar la lista
        document.getElementById('link-name').value = '';
        document.getElementById('link-url').value = '';
    } else {
        alert('Por favor, completa ambos campos.');
    }
});

// Función para eliminar un enlace
window.deleteLink = (index) => {
    const links = JSON.parse(localStorage.getItem('links')) || [];
    links.splice(index, 1);
    localStorage.setItem('links', JSON.stringify(links));
    loadLinks(); // Recargar la lista
};

// Cargar los enlaces al iniciar la página
loadLinks();