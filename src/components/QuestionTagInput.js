import React from 'react';
import '../styles/questionTagInputStyle.css';
import { WithContext as ReactTags } from 'react-tag-input';
import suggestions from "../static/suggestions";

const KeyCodes = {
    comma: 188,
    enter: 13,
};

const delimiters = [KeyCodes.comma, KeyCodes.enter];

const QuestionTagInput = ({ tags, setTags }) => {

    const handleDelete = (i) => {
        setTags(
            tags.filter((tag, index) => index !== i)
        );
    }

    const handleAddition = (tag) => {
        setTags([...tags, tag]);
    }

    const handleDrag = (tag, currPos, newPos) => {
        const newTags = tags.slice();

        newTags.splice(currPos, 1);
        newTags.splice(newPos, 0, tag);

        // re-render
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