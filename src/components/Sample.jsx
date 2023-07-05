import Form from 'react-bootstrap/Form';

function Sample() {
  return (
    <Form>
      {['checkbox', 'radio'].map((type) => (
        <div key={`default-${type}`} className="mb-3">
          <Form.Check // prettier-ignore
            type={type}
            id={`default-${type}`}
            label={`default ${type}`}
          />

          <Form.Check
            disabled
            type={type}
            label={`disabled ${type}`}
            id={`disabled-default-${type}`}
          />
        </div>
      ))}
    </Form>
  );
}

export default Sample;



{/* <Link to="/" class="nav-item">Home</Link> */}
{/* <Route exact path='/' element={<AddCard onAdd={addCard}/>}/> */}
{/* <Route exact path='/' element={<><AddCard onAdd={addCard}/>
    <Bg data={data} onDelete={deleteCard} />
    </>}/> */}