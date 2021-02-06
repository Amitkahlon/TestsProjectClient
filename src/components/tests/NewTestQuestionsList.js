import React, { useEffect, useState } from 'react';
import { Button, Checkbox, Dropdown, Icon, Input, Label, Table } from 'semantic-ui-react';
import DetailedQuestionModal from '../controls/DetailedQuestionModal';
import '../../styles/TestQuestionsList.css';

const NewTestQuestionsList = ({ questions, handleSelectQuestion, editQts=[] }) => {
    const [filteredQuestions, setFilteredQuestions] = useState([])
    const [search, setSearch] = useState('')
    const [selectedQuestions, setSelectedQuestions] = useState(editQts)
    const [selectedSearchOption, setSelectedSearchOption] = useState('')
    const [selectAll, setSelectAll] = useState(false)

    useEffect(() => {
        setFilteredQuestions(questions)
    }, [questions])

    useEffect(() => {
        if(selectAll){
            let qts = []
            questions.forEach(q => qts.push(q._id))
            setSelectedQuestions(qts)
            handleSelectQuestion(selectedQuestions)
        }else{
            setSelectedQuestions([])
        }
    }, [selectAll, questions, selectedQuestions, handleSelectQuestion])

    useEffect(() => {
        handleSelectQuestion(selectedQuestions)
    }, [selectedQuestions, handleSelectQuestion])

    const handleCheckQuestion = (id) => {
        if (selectedQuestions.includes(id)) {
            setSelectedQuestions(selectedQuestions.filter(q => q !== id))
        }
        else {
            setSelectedQuestions(prev => ([...prev, id]))
        }
    }

    const handleSearch = (value) => {
        setSearch(value)
        if (value === '') {
            setFilteredQuestions(questions)
        } else {
            switch (selectedSearchOption) {
                case 'title':
                    setFilteredQuestions(questions.filter(q => q.title.toLowerCase().includes(value.toLowerCase())))
                    break;
                case 'tags': {
                    let qts = [];
                    questions.forEach(q => {
                        q.tags.forEach(t => {
                            if(t.toLowerCase() === value){
                                qts.push(q)
                            }
                        })
                    });
                    setFilteredQuestions(qts)
                    break;
                }
                default:
                    break;
            }
        }
    }

    let searchOptions = [
        { text: 'Title', value: 'title' },
        { text: 'Tags', value: 'tags' }
    ]

    let tableHeader = filteredQuestions.length > 0 ?
        <Table.Row>
            <Table.HeaderCell></Table.HeaderCell>
            <Table.HeaderCell>Question</Table.HeaderCell>
            <Table.HeaderCell>Answers</Table.HeaderCell>
            <Table.HeaderCell>Tags</Table.HeaderCell>
            <Table.HeaderCell>Actions</Table.HeaderCell>
        </Table.Row>
        :
        <></>

    let tableContent = filteredQuestions.length > 0 ? <>
        {filteredQuestions.map((question) => (
            <Table.Row style={{backgroundColor: selectedQuestions.find(q => q === question._id)? 'lightgreen':''}}>
                <Table.Cell textAlign='center'>
                    <Checkbox checked={selectedQuestions.length > 0 && selectedQuestions.find(q => q === question._id)} onChange={() => handleCheckQuestion(question._id)} />
                </Table.Cell>
                <Table.Cell>{question.title}</Table.Cell>
                <Table.Cell>{question.correctAnswers.length + question.incorrectAnswers.length}</Table.Cell>
                <Table.Cell>{question.tags.map(tag => (
                    <Label>{tag}</Label>
                ))}</Table.Cell>
                <Table.Cell>
                    <DetailedQuestionModal
                        header="Question details"
                        title={question.title}
                        correctAnswers={question.correctAnswers}
                        incorrectAnswers={question.incorrectAnswers}
                        trigger={<Button color='linkedin' size='tiny'>
                            <Icon name='edit'/>
                            Show question
                        </Button>}
                    />
                </Table.Cell>
            </Table.Row>
        ))}
    </>
        :
        <Table.Row>
            <Table.Cell textAlign='center'>
                <Icon name='minus circle' />
                There are no questions for this field.
            </Table.Cell>
        </Table.Row>

    return (
        <>
            <div className='searchbar'>
                <Input style={{ width: '30%' }} onChange={(e) => handleSearch(e.target.value)} value={search} placeholder='Search...' icon='search' />
                <Dropdown
                    style={{ marginLeft: '5px' }}
                    selection placeholder='Title'
                    options={searchOptions}
                    value={selectedSearchOption}
                    onChange={(e, { value }) => {
                        setSelectedSearchOption(value)
                    }}
                />
            </div>
            <div className='select-questions'>
                <label>Selected questions: {selectedQuestions.length}</label>
                <Checkbox 
                    label='Select All'
                    checked={selectAll}
                    onChange={() => setSelectAll(!selectAll)}
                />
            </div>
            <Table celled>
                <Table.Header>
                    {tableHeader}
                </Table.Header>
                <Table.Body>
                    {tableContent}
                </Table.Body>
            </Table>
        </>
    );
}

export default NewTestQuestionsList;