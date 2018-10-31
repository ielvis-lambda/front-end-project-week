import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { addNote } from '../actions';
import { withRouter } from 'react-router-dom';

const NewNoteViewContainer = styled.div`
  text-align: left;
  background: #f3f3f3;
  width: 75%;
`;

const NewNoteTitleContainer = styled.div`
  height: 150px;
  padding-top: 85px;
  font-size: 2rem;
  padding-left: 4%;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 95%;
  padding: 25px 2.5%;
`;

const NoteInputTitle = styled.input`
  font-size: 2rem;
  border: 3px solid #555;
  margin-bottom: 30px;
`;

const NoteInputContent = styled(NoteInputTitle)`
  height: 500px;
`;

const NoteAppButton = styled.button`
  background-color: #2ac0c4;
  color: white;
  width: 30%;
  font-size: 2rem;
  padding: 30px 2.5%;
  margin: 0 2.5%;
  margin-bottom: 30px;
`;

class NewNoteView extends Component {
  state = {
    title: '',
    textBody: ''
  };

  handleInput = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  clickHandler = event => {
    event.preventDefault();
    this.props.addNote(this.state);
    this.props.history.push('/');
  };

  render() {
    const { title, textBody } = this.state;

    return (
      <NewNoteViewContainer>
        <NewNoteTitleContainer>
          <h2>Create New Note:</h2>
        </NewNoteTitleContainer>
        <InputContainer>
          <NoteInputTitle type="text" placeholder="Note Title" name="title" value={title} onChange={this.handleInput} />
          <NoteInputContent
            type="text"
            placeholder="Note Content"
            name="textBody"
            value={textBody}
            onChange={this.handleInput}
          />
        </InputContainer>
        <NoteAppButton onClick={this.clickHandler}>Save</NoteAppButton>
      </NewNoteViewContainer>
    );
  }
}

const mapStateToProps = state => {
  return {
    addingNote: state.addingNote,
    error: state.error
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    {
      addNote
    }
  )(NewNoteView)
);