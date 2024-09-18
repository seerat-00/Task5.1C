import React, { Component } from 'react';
import { Form, Radio, Container } from 'semantic-ui-react';
import Question from './question'; 
import Article from './article'; 

export default class Radioexample extends Component {
  state = {
    value: '' 
  };

  handleChange = (e, { value }) => this.setState({ value });

  render() {
    const { value } = this.state;

    return (
      <Container>
        <Form style={{ margin: '10px', padding: '10px' }}>
          <Form.Field>
            <b>Select Post type:</b> {value}
          </Form.Field>
          <Form.Field>
            <Radio
              label='Question'
              name='postType'
              value='Question'
              checked={value === 'Question'}
              onChange={this.handleChange}
            />
          </Form.Field>
          <Form.Field style={{ marginTop: '5px', marginBottom: '10px' }}>
            <Radio
              label='Article'
              name='postType'
              value='Article'
              checked={value === 'Article'}
              onChange={this.handleChange}
            />
          </Form.Field>
        </Form>
        {value === 'Question' && <Question />}
        {value === 'Article' && <Article />}
      </Container>
    );
  }
}
