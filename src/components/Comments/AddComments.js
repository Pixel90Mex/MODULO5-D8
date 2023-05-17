import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import { Spinner } from 'react-bootstrap'

const AddComments = ({ asin }) => {

    const [form, setForm] = useState({})
    console.log('form:',form)
    //devo fare il POST passandogli nel body lo stato form.json 
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')
    const sendComment = async (e) => {
        e.preventDefault()
        setLoading(true)
        try {
            const data = await fetch('https://striveschool-api.herokuapp.com/api/comments/',
                {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDVkMjFkY2RmZGUzMjAwMTRjZDdhN2QiLCJpYXQiOjE2ODM4MjUxMTYsImV4cCI6MTY4NTAzNDcxNn0.jW3AP_wKWMp5GyAAn-YGABI1reEwVrRixmvmBfeDzBo`
                    },
                    method: 'POST',
                    body: JSON.stringify(form),
                })
            const response = await data.json()
            setLoading(false)
        } catch (error) {
            if (error) setError("Errore nell'invio dei dati")
        }
    }

    return (
        <Form onSubmit={sendComment}>
            <Form.Control
                as='textarea'
                rows='3'
                name='comment'
                onChange={(e) => setForm({
                    ...form,
                    comment: e.target.value
                })}
            />
            <Form.Select name='rate'
                onChange={(e) => setForm({
                    ...form,
                    rate: e.target.value,
                    elementId: asin
                })}
            >
                <option>Dai un voto!</option>
                <option value='1'>1</option>
                <option value='2'>2</option>
                <option value='3'>3</option>
                <option value='4'>4</option>
                <option value='5'>5</option>
            </Form.Select>
            {loading && !error && <Spinner/>}
            <button type='submit'>add</button>
        </Form>
    )
}

export default AddComments