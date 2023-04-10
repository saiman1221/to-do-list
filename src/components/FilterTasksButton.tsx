import React, {useState} from 'react';
import '../styles/FilterTasksButton.scss'

export const FilterTasksButton = () => {
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
            </button>
            <ul className={filterDisplay ? 'FilterTasks__options show' : 'FilterTasks__options hide'}>
                {renderFilterOptions(filterList)}
            </ul>
        </div>
    );
};