import React from 'react';
import { Form,  Button, TextArea, Input } from 'semantic-ui-react';

const Article = () => {
    return (
      <Form style={{margin: '10px'}}>
        <div style={{ backgroundColor: 'grey', height: 'auto', padding:'10px'}}>
            <h3>What do you want to ask or share</h3>
        </div>
  
        <Form.Field>
          <label>Title</label>
          <Input placeholder="Enter the title of your article" />
        </Form.Field>

        <Form.Field>
          <label>Abstract</label>
          <TextArea placeholder="Enter 1 paragraph abstract " rows={3}/>
        </Form.Field>
  
        <Form.Field>
          <label>Article</label>
          <TextArea placeholder="Write your article here" rows={7}/>
        </Form.Field>

        <Form.Field >
          <label>Tags</label>
          <Input placeholder="Please add upto 3 tags" />
        </Form.Field>
  
        <Button type="submit">Post</Button>
      </Form>
    );
  };

export default Article;
  