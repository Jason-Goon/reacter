const handleSubmit = async (e) => {
    e.preventDefault()
    try {
        const res = await fetch('/api/login', {  // Changed this line
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(credentials)
        })
        const data = await res.json()
        console.log(data)
    } catch (err) {
        console.error(err)
    }
}

export default App;  // Add this line