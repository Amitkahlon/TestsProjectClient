import React, { Component, useState } from 'react';
import { render } from 'react-dom';
import '../styles/questionTagInputStyle.css';
import { WithContext as ReactTags } from 'react-tag-input';

const suggestions =
    [
        { id: "1", text: "question" },
        { id: "2", text: "mark" },
        { id: "howmuch", text: "howmuch" },
        { id: "Programing", text: "Programing" },
        { id: "React", text: "React" },
        { id: "Native", text: "Native" },
        { id: "javascript", text: "javascript" },
        { id: "c#", text: "c#" },
        { id: "object-oriented", text: "object-oriented" },
        { id: "swag", text: "swag" },
        { id: "phyton", text: "phyton" },
        { id: "express", text: "express" },
        { id: "sql", text: "sql" },
        { id: "nosql", text: "nosql" },
        { id: "wpf", text: "wpf" },
        { id: "entitiy-framework", text: "entitiy-framework" },
        { id: "Hard", text: "Hard" },
        { id: "Easy", text: "Easy" },

    ];

const KeyCodes = {
    comma: 188,
    enter: 13,
};

const delimiters = [KeyCodes.comma, KeyCodes.enter];

const QuestionTagInput = ({ tags, setTags }) => {

    const handleDelete = (i) => {
        setTags(
            tags.filter((tag, index) => index !== i),
        );
    }

    const handleAddition = (tag) => {
        setTags([...tags, tag]);
    }

    const handleDrag = (tag, currPos, newPos) => {
        const newTags = tags.slice();

        newTags.splice(currPos, 1);
        newTags.splice(newPos, 0, tag);

        // // re-render
        setTags(newTags);
    }

    const handleTagClick = (index) => {
        console.log('The tag at index ' + index + ' was clicked');
    }

    return (
        <>
            <ReactTags
                tags={tags}
                suggestions={suggestions}
                delimiters={delimiters}
                handleDelete={handleDelete}
                handleAddition={handleAddition}
                handleDrag={handleDrag}
                handleTagClick={handleTagClick}
            />
        </>
    );
}

export default QuestionTagInput;