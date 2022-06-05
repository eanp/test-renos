import React, { useState } from 'react'
import { Modal } from '../components/Modal';
import { Button } from '../components/Button';
import './index.css' 

const HeaderModal = '<h1>Header Modal</h1>'

const BodyModal = '<p className="modal_body_text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias, deserunt nostrum! Aliquam error eius obcaecati fugiat dicta rerum? Id, reprehenderit aliquam, possimus totam atque pariatur velit optio eum ab sint ratione incidunt nam sed expedita, labore officiis praesentium. Quia at reprehenderit magni soluta suscipit! Quaerat obcaecati iure error esse fuga omnis repellat rem numquam minima magnam, laborum quia impedit culpa! Reprehenderit voluptas magni voluptatum sequi itaque odio saepe nesciunt, reiciendis corporis hic perferendis sint delectus est obcaecati architecto, temporibus quidem in ea! Doloribus ipsam explicabo optio aspernatur, voluptatum ullam dolor ea assumenda architecto aliquam dolorem quis libero maiores neque veniam, vitae nemo doloremque. Asperiores sequi voluptates minima distinctio quis et non dolorem error harum dolores autem animi aliquid sapiente, qui placeat, odit, repellendus iusto eius nostrum voluptas fugiat atque quaerat accusamus velit? Ipsa iste, reprehenderit harum earum placeat non beatae porro iusto veritatis atque pariatur? Doloremque placeat a, aut iusto aliquid eum beatae recusandae commodi voluptatibus ex non enim, nesciunt eaque autem quidem saepe sit. Minima sint placeat commodi itaque eveniet iure debitis pariatur nemo.</p>'

const FooterModal = '<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci laboriosam.</p>'

function App() {
  const [open, setOpen] = useState(false);

  return (
    <div className="App">
          <Button onOpen={()=>setOpen(true)} />
          <Modal open={open} onClose={() => setOpen(false)} header={<HeaderModal />} body={<BodyModal />} footer={<FooterModal />} />
    </div>
  );
}

export default App;
