import React from 'react';
import { Form,  Button, TextArea, Input } from 'semantic-ui-react';

const Question = () => {
    return (
      <Form style={{margin: '10px'}}>
        <div style={{ backgroundColor: 'grey', height: 'auto', padding:'10px'}}>
            <h3>What do you want to ask or share</h3>
        </div>
  
        <Form.Field >
          <label>Title</label>
          <Input placeholder="Start your question with how, what, why, etc." />
        </Form.Field>
  
        <Form.Field >
          <label>Describe your problem</label>
          <TextArea placeholder="Describe your problem" rows={8}/>
        </Form.Field>
  
        <Form.Field >
          <label>Tags</label>
          <Input placeholder="Please add upto 3 tags" />
        </Form.Field>
  
        <Button type="submit" >Post</Button>
      </Form>
    );
  };

export default Question;
  