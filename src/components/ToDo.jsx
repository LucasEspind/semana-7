import React from 'react';

export default function ToDo({ tarefas }) {

    return (
        <div>
            <ul>

                {tarefas.map(item => {
                    return <li key={item}>{item}</li>
                })}

            </ul>
        </div>
    )
}

