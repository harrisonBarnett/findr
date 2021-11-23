import React from 'react';
import { useState, useEffect } from 'react'

import { db } from '../firebase_config'
import { collection, getDocs, addDoc } from 'firebase/firestore'

import styled from 'styled-components'
const StyledContainer = styled.div`
    border: 1px solid red;
    height: 100%;
`
const StyledSubmitContainer = styled.div`
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
const StyledPlayerlist = styled.div`
   height: 100%;
   display: flex;
   flex-direction: column;
   gap: 1em;
`
const StyledEntry = styled.div`
    border: 1px solid black;
    width: 100%;
    height: 10%;
    display: flex;
`

const Leaderboard = props => {
    const [nameSubmit, setNameSubmit] = useState(false)

    const [newName, setNewName] = useState('')
    const [players, setPlayers] = useState([])
    const playersCollectionRef = collection(db, 'players')

    const addPlayer = async () => {
        setNameSubmit(true)
        setNewName('')
        await addDoc(playersCollectionRef, {name: newName, score: props.score})
    }
    useEffect(() => {
        const getPlayers = async () => {
            const data = await getDocs(playersCollectionRef)
            setPlayers(data.docs.map((doc)=> ({...doc.data(), id: doc.id})))
        }
        getPlayers()
    }, [playersCollectionRef])
    return (
        <StyledContainer>
            <StyledSubmitContainer>
                <h3>add your score to the annals of find-o-rama history</h3>
                <div>
                    <input 
                    id='leaderboard-input'
                    value={newName}
                    onChange={(event) => {setNewName(event.target.value)}}></input>
                    <button 
                    onClick={addPlayer}
                    style={{
                        opacity: nameSubmit ? '.5' : '1',
                        pointerEvents: nameSubmit ? 'none' : 'all'
                    }}>add your score</button>
                </div>
                
            </StyledSubmitContainer>
            
            <StyledPlayerlist 
            id='leaderboard-list'>
                {players.map((player)=> {
                    return <StyledEntry key={player.id}>
                            <p>{player.name}</p>
                            <p>{player.score}</p>
                        </StyledEntry>
                })}
            </StyledPlayerlist>
        </StyledContainer>
    );
};

export default Leaderboard;