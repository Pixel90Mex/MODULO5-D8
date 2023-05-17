import React from 'react'
import { useEffect, useState } from 'react'
import { Spinner, ListGroup } from 'react-bootstrap'
import { nanoid } from 'nanoid'
import AddComments from './AddComments'
import RatingSystem from './RatingSystem'

const CommentArea = ({ asin }) => {

    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')
    const [comments, setComments] = useState([])

    const getComments = async () => {
        setLoading(true)
        try {
            const data = await fetch(`https://striveschool-api.herokuapp.com/api/comments/${asin}`,
                {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDVkMjFkY2RmZGUzMjAwMTRjZDdhN2QiLCJpYXQiOjE2ODM4MjUxMTYsImV4cCI6MTY4NTAzNDcxNn0.jW3AP_wKWMp5GyAAn-YGABI1reEwVrRixmvmBfeDzBo`
                    }
                })
            const response = await data.json()
            setComments(response)
            setLoading(false)
        } catch (error) {
            if (error) {
                setError('Errore nella ricezione dei dati')
            }
        }
    }
    useEffect(() => {
        if (asin !== '') {
            getComments()
        }
    }, [asin])

    const delComment = async (commentId) => {
        try {
            const data = await fetch(`https://striveschool-api.herokuapp.com/api/comments/${commentId}`,
                {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDVkMjFkY2RmZGUzMjAwMTRjZDdhN2QiLCJpYXQiOjE2ODM4MjUxMTYsImV4cCI6MTY4NTAzNDcxNn0.jW3AP_wKWMp5GyAAn-YGABI1reEwVrRixmvmBfeDzBo`
                    },
                    method: 'DELETE'
                })
                return await data.json()
        } catch (error) {
            if (error) setError('ERRORE')
        }
    }

    return (
        <>
            <div>Commenti</div>
            <ListGroup>
                {loading && <Spinner />}
                {!loading && comments && comments.map((item) => {
                    console.log(item)
                    return (
                        <ListGroup.Item key={nanoid()}>
                            <div>
                                {item.comment}

                            </div>
                            <div>
                                {item.author}
                            </div>
                            <div>
                                <RatingSystem
                                    stars={item.rate}
                                />
                            </div>
                            <button onClick={() => delComment(item._id)}>del</button>
                        </ListGroup.Item>
                    )
                })}

            </ListGroup>
            <AddComments asin={asin} />
        </>
    )
}

export default CommentArea