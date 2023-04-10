import React, {useEffect, useState} from 'react';
import '../styles/FilterTasksButton.scss'

export const FilterTasksButton = (props: any) => {
    const [filterDisplay, setFilterDisplay] = useState(false);
    const [filterSelect, setFilterSelect] = useState('Сортировать по')
    const filterList = [
        {
            title: 'Сначала новые',
            value: 'filter_new'
        },
        {
            title: 'Сначала старые',
            value: 'filter_old'
        },
        {
            title: 'По алфавиту с начала',
            value: 'filter_alphabet'
        },
        {
            title: 'По алфавиту с конца',
            value: 'filter_alphabet_reverse'
        },
    ];

    useEffect(() => {
        props.filterTasks(filterSelect);
    }, [filterSelect])

    const chooseFilter = (value: any) => {
        setFilterSelect(value);
        setFilterDisplay(false);
    }

    const renderFilterOptions = (options: any) => {
        return options.map((el: any) => <li className={'FilterTasks__options__item'}
                              onClick={() => chooseFilter(el.value)}>{el.title}</li>)
    }

    return (
        <div className={'FilterTasks'}>
            <button className={'FilterTasks__button'} onClick={() => setFilterDisplay(!filterDisplay)}>
                {filterList.filter(filter => filter.value === filterSelect)[0]?.title.toString() || filterSelect}
                <div className={filterDisplay ? 'arrow up' : 'arrow down'}>
                    <div className={'arrow__part left'}></div>
                    <div className={'arrow__part right'}></div>
                </div>
            </button>
            <ul className={filterDisplay ? 'FilterTasks__options show' : 'FilterTasks__options hide'}>
                {renderFilterOptions(filterList)}
            </ul>
        </div>
    );
};