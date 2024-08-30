const API_URL = 'http://localhost:3000/api/piadas';

document.getElementById('piadaForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const title = document.getElementById('title').value;
    const jokeMessage = document.getElementById('jokeMessage').value;

    const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ title, jokeMessage })
    });

    const piada = await response.json();
    appendPiada(piada);

    document.getElementById('title').value = '';
    document.getElementById('jokeMessage').value = '';
});

async function loadPiadas() {
    const response = await fetch(API_URL);
    const piadas = await response.json();
    piadas.forEach(appendPiada);
}

function appendPiada(piada) {
    const li = document.createElement('li');
    li.innerHTML = `
        <strong>${piada.title}</strong>
        <p>${piada.jokeMessage}</p>
        <button onclick="deletePiada('${piada._id}')">Deletar</button>
    `;
    document.getElementById('piadasList').appendChild(li);
}

async function deletePiada(id) {
    await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
    document.location.reload();
}

loadPiadas();
