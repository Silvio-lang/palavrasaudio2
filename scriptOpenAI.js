// Defina a chave da API da OpenAI
const API_KEY = "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";  // Substitua com a sua chave de API

// Função para fazer a requisição à OpenAI
function fetchOpenAIResponse(prompt) {
    // Configuração da requisição para a API
    fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${API_KEY}`
        },
        body: JSON.stringify({
            model: "gpt-3.5-turbo",  // Ou o modelo que você está utilizando
            messages: [
                { role: "user", content: prompt }
            ]
        })
    })
    .then(response => response.json())  // Converte a resposta para JSON
    .then(data => {
        // Aqui você pode processar a resposta da API
        console.log("Resposta da OpenAI:", data);

        // Exemplo de exibição da resposta no console
        if (data.choices && data.choices[0] && data.choices[0].message) {
            console.log("Resposta do modelo:", data.choices[0].message.content);
        } else {
            console.log("Não foi possível obter uma resposta válida.");
        }
    })
    .catch(error => {
        // Tratamento de erro
        console.error('Erro ao fazer a requisição:', error);
    });
}

