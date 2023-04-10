import React, {useState} from 'react';
import '../styles/SideBar.scss';

export const SideBar = () => {
    const logo: string = require("../assets/tags-list/cross.svg").default;
    const [inputTags, setInputTags] = useState('')

    return (
        <div className={'SideBar'}>
            <h1 className={'SideBar__title'}>Tags list</h1>
            <div className={'SideBar__search_tags'}>
                <input
                    type="text"
                    placeholder={'Tag name...'}
                    className={'SideBar__search_tags__input'}
                    value={inputTags}
                    onChange={(e) => setInputTags(e.target.value)}
                />
                <button
                    className={'SideBar__search_tags__close_button'}
                    onClick={() => setInputTags('')}
                >
                    <img src={logo} alt="Удалить содержимое"/>
                </button>
            </div>
        </div>
    );
}