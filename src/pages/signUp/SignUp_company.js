import { useEffect, useState } from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import InputMask from 'react-input-mask';
import { useSelector } from "react-redux";


// className="border-danger"
function SignUp_company() {
  let [companyName, setCompanyName] = useState('');
  let [companyNameError, setCompanyNameError] = useState(false);
  let [businessType, setBusinessType] = useState('');
  let [businessTypeError, setBusinessTypeError] = useState(false);
  let [businessRegistrationNumber, setBusinessRegistrationNumber] = useState('');
  let [businessRegistrationNumberError, setBusinessRegistrationNumberError] = useState(false);
  let [businessStatus, setBusinessStatus] = useState('');
  let [businessStatusError, setBusinessStatusError] = useState(false);
  let [businessCategory, setBusinessCategory] = useState('');
  let [businessCategoryError, setBusinessCategoryError] = useState(false);
  let [representativeName, setRepresentativeName] = useState('');
  let [representativeNameError, setRepresentativeNameError] = useState(false);
  let [companyPhoneNumber, setCompanyPhoneNumber] = useState('');
  let [companyPhoneNumberError, setCompanyPhoneNumberError] = useState(false);

  let companyNameRegex =  /^[가-힣!@#$%^&*()_+={}\[\]:;"'<>,.?/~\\]+$/; //단어한글과특수문자
  let registrationNumberRegex = /^\d{3}-\d{2}-\d{5}$/; //숫자 10자리만
  let statusRegex = /^[가-힣]{1,5}$/; //힌글단어 5자리까지
  let categoryRegex = /^[가-힣]{1,5}$/; //힌글단어 5자리까지
  let reNameRegex = /^[가-힣a-zA-Z]{1,20}$/; // 한글단어나 영문20자리까지 
  let cpNumberRegex = /^\d{2,3}-\d{3,4}-\d{4}$/;

  useEffect(() => {
    if (companyName != '') {
      companyNameRegex.test(companyName) ? setCompanyNameError(false) : setCompanyNameError(true);
    }
    if (businessRegistrationNumber != '') {
      registrationNumberRegex.test(businessRegistrationNumber) ? setBusinessRegistrationNumberError(false) : setBusinessRegistrationNumberError(true);
    }
    if (businessStatus != '') {
      statusRegex.test(businessStatus) ? setBusinessStatusError(false) : setBusinessStatusError(true);
    }
    if (businessCategory != '') {
      categoryRegex.test(businessCategory) ? setBusinessCategoryError(false) : setBusinessCategoryError(true);
    }
    if (representativeName != '') {
      reNameRegex.test(representativeName) ? setRepresentativeNameError(false) : setRepresentativeNameError(true);
    }
    if (companyPhoneNumber != '') {
      cpNumberRegex.test(companyPhoneNumber) ? setCompanyPhoneNumberError(false) : setCompanyPhoneNumberError(true);
    }
  }, [companyName, businessRegistrationNumber, businessStatus, businessCategory, representativeName, companyPhoneNumber]);

  let test = useSelector((state)=> { return state});
  console.log(test);
    return (
        
<Container style={{ backgroundColor: '#f5f5f5' }} className="pt-5 pb-3">

  <Row className="justify-content-center mb-5">

    <Col md={10} >
    <div style={{ marginLeft: '120px' }}>
      <Card style={{ width: '800px', display: 'flex', alignItems: 'center' }}>
        <Card.Img variant="top" src={require('./signUp.png')} style={{ height: '150px' }} />
        <div className="horizontal-line "></div>
        
        <Card.Body className="text-center h2">
          <Card.Title>신규 회사 만들기</Card.Title>
          <div className="horizontal-line3"></div>
          <Card.Text className="text-muted small-text mt-3">
          회원님의 회사 정보를 입력해주세요.

          </Card.Text>
       
        </Card.Body>
        <Container style={{ width: '600px' }}>
        <Form >
        <div className="text-start">
      <Form.Group className="my-2" controlId="formBasicName">
      
        <Form.Label style={{ fontWeight: 'bold' }}>회사 이름</Form.Label>
      
        <Form.Control type="text" placeholder="Enter company name"  onChange={(e)=>{
          setCompanyName(e.target.value);
          // regex.test(name) ? setNameError(false) : setNameError(true);
          }} className={ companyNameError ? "border-danger" : ""}/>
        
      </Form.Group>
      <Form.Group className="my-2" controlId="formBasicName">
      
        <Form.Label style={{ fontWeight: 'bold' }}>구분</Form.Label>
      <Form.Select aria-label="Default select example" onChange={(e)=>{
        setBusinessType(e.target.value);
      }}>
      <option>Select business type</option>
      <option value="1">개인사업자</option>
      <option value="2">법인사업자</option>
      <option value="3">기타</option>
    </Form.Select>
    </Form.Group>
      <Form.Group className="my-2 " controlId="formBasicPhone">
                  <Form.Label style={{ fontWeight: 'bold' }}>사업자등록번호</Form.Label>
                  <InputMask
                    mask="999-99-99999"
                    maskChar="_"
                    // className=""
                    placeholder="Enter business registration number"
                    onChange={(e)=>{
                      setBusinessRegistrationNumber(e.target.value);
                      // numberRegex.test(phoneNumber) ? setphoneNumberError(false) : setphoneNumberError(true);
                      }} className={ businessRegistrationNumberError ? "form-control border-danger" : "form-control"}
                           
                    
                  />
                  <Form.Text className="text-muted" style={{ fontSize: '11px'}}   >
        * 입력된 휴대전화번호는 아이디, 비밀번호 찾기 등 본인 확인 용도 또는 WEHAGO로부터 알림
을 받을 때 사용됩니다.
        </Form.Text>
                </Form.Group>
                
                <Form.Group className="my-2" controlId="formBasicEmail" >
        <Form.Label style={{ fontWeight: 'bold' }}>업태</Form.Label>
        <Form.Control type="text" placeholder="Enter business status"  onChange={(e)=>{
                      setBusinessStatus(e.target.value);}}
                      className={ businessStatusError ? "border-danger" : ""}/>
      </Form.Group>
              
      <Form.Group className="my-2" controlId="formBasicPassword" >
      
        <Form.Label style={{ fontWeight: 'bold' }}>업종</Form.Label>
        
        <Form.Control type="text" placeholder="Enter business category" onChange={(e)=>{
                      setBusinessCategory(e.target.value);
                    console.log(businessCategory)}}
                      className={ businessCategoryError ? "border-danger" : ""}/>
      </Form.Group>
      
      <Form.Group className="my-2" controlId="formBasicPassword2" >
        <Form.Label style={{ fontWeight: 'bold' }}>대표자 이름</Form.Label>
        <Form.Control type="text" placeholder="Enter representative name" onChange={(e)=>{
                      setRepresentativeName(e.target.value);}}
                      className={ representativeNameError ? "border-danger" : ""}/>
      </Form.Group>
      <Form.Group className="my-2 " controlId="formBasicPhone">
                  <Form.Label style={{ fontWeight: 'bold' }}>회사 전화번호</Form.Label>
                  <InputMask
                    mask="999-9999-9999"
                    maskChar="_"
                    // className=""
                    placeholder="Enter company phone number"
                    onChange={(e)=>{
                      setCompanyPhoneNumber(e.target.value);
                      // numberRegex.test(phoneNumber) ? setphoneNumberError(false) : setphoneNumberError(true);
                      }} className={ companyPhoneNumberError ? "form-control border-danger" : "form-control"}
                           
                    
                  />
                </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      </div>
      <div className="pt-3 pb-2 text-muted" style={{ backgroundColor: '#F8FFFF', fontSize: '11px' }}>
      <p>- 회사이름, 구분 등 기본정보는 입력 후 변경할 수 없으므로 정확한 정보를 입력하세요.
</p>
      <p>- 기업회원가입 후 회사관리설정 메뉴에서 회사인증을 통해 인증해 실제 사업자임을 인증하고 사용하실 수 있습니다.
</p>
      </div>
      <div className="my-4">
      <Button variant="light" type="submit" className="mx-2">
      &lt; 이전 
      </Button>
      <Button variant="primary"  className="mx-3" onClick={()=>{console.log(companyName, businessType, businessRegistrationNumber, businessStatus, businessCategory, representativeName, companyPhoneNumber)}}>
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

export default SignUp_company;