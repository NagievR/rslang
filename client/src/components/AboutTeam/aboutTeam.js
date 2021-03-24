import { useState } from 'react';
import { useHistory } from 'react-router-dom';

import s from './style.module.css';

const AboutTeam = () => {

    const [authors, setAuthors] = useState([
        {
            id: 1,
            img: '../',
            name: 'Олег Кольцов',
            git: '@AlekRing',
            gitLink: 'https://github.com/AlekRing',
            role: 'done something',
            activated: false,
        },
        {
            id: 2,
            img: '../',
            name: 'Алексей',
            git: '@git..',
            gitLink: 'github.com/..',
            role: 'done something',
            activated: false,
        },
        {
            id: 3,
            img: '../',
            name: 'Ойбек',
            git: '@git..',
            gitLink: 'github.com/..',
            role: 'done something',
            activated: false,
        },
        {
            id: 4,
            img: '../',
            name: 'Руслан',
            git: '@git..',
            gitLink: 'github.com/..',
            role: 'done something',
            activated: false,
        }
    ])

    const activateRole = (id) => {
        setAuthors(prevState => {
            return (
                prevState.map(auth => {
                    if (auth.id === id) {
                        auth.activated = !auth.activated
                    }
                    return auth
                })
            )
        })
    }

    return (
        <>
            <div className={s.about}>
               <div className={s.bg_blur}>
                    <div className={s.about_logoblock}>
                        <div className={s.eclips}></div>
                        <div className={s.about_title}>О команде</div>
                    </div>
                    <div className={s.cards_block}>
                        {
                            authors.map(auth => {
                                return (
                                    <div key={auth.id} className={s.card}>
                                        <div className={s.img}>
                                            IMG
                                        </div>
                                        <div className={s.name}>
                                            {auth.name}
                                        </div>
                                        <div className={s.git}>
                                            <a href={auth.gitLink} target={'_blank'}>{auth.git}</a>
                                        </div>
                                        <button onClick={()=>{activateRole(auth.id)}}
                                            className={s.donat_btn}>
                                            Вклад в проект
                                        </button>
                                        <div className={`${s.role} ${auth.activated ? s.active : s.nope}`}>
                                            {auth.role + auth.id}
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
               </div>
            </div>
        </>
    )
}

export default AboutTeam;