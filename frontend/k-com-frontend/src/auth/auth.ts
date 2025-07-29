import { useAuth } from '@clerk/clerk-react'
import { useEffect } from 'react'

function ExampleComponent() {
    const { getToken } = useAuth()

    useEffect(() => {
        async function fetchData() {
            const token = await getToken({ template: 'supabase-kcom' }) // <- template from JWT settings
            const response = await fetch('http://localhost:8080/api/protected', {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })

            const data = await response.json()
            console.log(data)
        }

        fetchData()
    }, [])

    return 
}

export default ExampleComponent
