import { useState } from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import InputMask from 'react-input-mask';


// className="border-danger"
function SignUp_infomation() {
  let [name, setName] = useState('');
  let [nameError, setNameError] = useState(false);
  let [phoneNumber, setPhoneNumber] = useState('');
  let [phoneNumberError, setphoneNumberError] = useState(false);
  let [id, setId] = useState('');
  let [password, setPassword] = useState('');
  let [confirmPassword, setConfirmPassword] = useState('');
  let [email, setEmail] = useState('');

  let regex =  /^[가-힣a-zA-Z]+$/;
  let numberRegex = /^\d{2,3}-\d{3,4}-\d{4}$/;
    return (
        
<Container style={{ backgroundColor: '#f5f5f5' }} className="pt-5 pb-3">

  <Row className="justify-content-center mb-5">

    <Col md={10} >
    <div style={{ marginLeft: '120px' }}>
      <Card style={{ width: '800px', display: 'flex', alignItems: 'center' }}>
        <Card.Img variant="top" src={require('./signUp.png')} style={{ height: '150px' }} />
        <div className="horizontal-line "></div>
        
        <Card.Body className="text-center h2">
          <Card.Title>WEHAGO 회원정보입력</Card.Title>
          <div className="horizontal-line2"></div>
          <Card.Text className="text-muted small-text mt-3">
          회원님의 정보를 입력해주세요.

          </Card.Text>
       
        </Card.Body>
        <Container style={{ width: '600px' }}>
        <Form >
        <div className="text-start">
      <Form.Group className="my-2" controlId="formBasicName">
      
        <Form.Label style={{ fontWeight: 'bold' }}>사용자 이름</Form.Label>
      
        <Form.Control type="email" placeholder="Enter name"  onChange={(e)=>{
          setName(e.target.value);
          regex.test(name) ? setNameError(false) : setNameError(true);
          }} className={ nameError ? "border-danger" : ""}/>
        
      </Form.Group>
      
      <Form.Group className="my-2 " controlId="formBasicPhone">
                  <Form.Label style={{ fontWeight: 'bold' }}>휴대전화번호</Form.Label>
                  <InputMask
                    mask="999-9999-9999"
                    maskChar="_"
                    // className=""
                    placeholder="Enter phone number"
                    onChange={(e)=>{
                      setPhoneNumber(e.target.value);
                      numberRegex.test(phoneNumber) ? setphoneNumberError(false) : setphoneNumberError(true);
                      }} className={ phoneNumberError ? "form-control border-danger" : "form-control"}
                           
                    
                  />
                  <Form.Text className="text-muted" style={{ fontSize: '11px'}}   >
        * 입력된 휴대전화번호는 아이디, 비밀번호 찾기 등 본인 확인 용도 또는 WEHAGO로부터 알림
을 받을 때 사용됩니다.
        </Form.Text>
                </Form.Group>
                
                <Form.Group className="my-2" controlId="formBasicEmail" >
        <Form.Label style={{ fontWeight: 'bold' }}>아이디</Form.Label>
        <Form.Control type="email" placeholder="Enter id"  onChange={(e)=>{
                      setId(e.target.value);}}/>
        <Form.Text className="text-muted" style={{ fontSize: '11px'}} >
        * 생성하신 아이디는 변경할수없으니 가입하시는 본인의 아이디로 생성하시기 바랍니다.

        </Form.Text>
      </Form.Group>
              
      <Form.Group className="my-2" controlId="formBasicPassword" >
      
        <Form.Label style={{ fontWeight: 'bold' }}>Password</Form.Label>
        
        <Form.Control type="password" placeholder="Password" onChange={(e)=>{
                      setPassword(e.target.value);}}/>
        <Form.Text className="text-muted" style={{ fontSize: '11px'}} >
        * 비밀번호는 8자~16자의 영문 대문자, 소문자, 숫자 및 특수문자 중 2가지 이상의 조합으로
입력해주세요

        </Form.Text>
      </Form.Group>
      
      <Form.Group className="my-2" controlId="formBasicPassword2" >
        <Form.Label style={{ fontWeight: 'bold' }}>Confirm password</Form.Label>
        <Form.Control type="password" placeholder="Confirm Password" onChange={(e)=>{
                      setConfirmPassword(e.target.value);}}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail" >
        <Form.Label style={{ fontWeight: 'bold' }}>이메일 주소</Form.Label>
        <Form.Control type="email" placeholder="Enter email" onChange={(e)=>{
                      setEmail(e.target.value);}}/>
        <Form.Text className="text-muted" style={{ fontSize: '11px'}} >
        * 아이디, 비밀번호 찾기 등 본인확인이 필요한 경우 사용할 이메일 주소입니다.

        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      </div>
      <div className="pt-3 pb-2 text-muted" style={{ backgroundColor: '#F8FFFF', fontSize: '11px' }}>
      <p>- 회사/단체 이름은 가입완료 후 변경할 수 없으므로 정확한 정보를 입력하세요.</p>
      <p>- 가입완료 후 회사설정에서 회사인증 절차를 완료하면 더 다양한 서비스를 이용하실 수 있습니다.</p>
      </div>
      <div className="my-4">
      <Button variant="light" type="submit" className="mx-2">
      &lt; 이전 
      </Button>
      <Button variant="primary"  className="mx-3" onClick={()=>{console.log(name, phoneNumber, id, password, confirmPassword, email)}}>
        다음 &gt;
      </Button>
      </div>
    </Form>
    </Container>
  
      </Card>
      </div>
    </Col>
  </Row>
</Container>
    );
}

export default SignUp_infomation;