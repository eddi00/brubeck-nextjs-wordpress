import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Accordion from "react-bootstrap/Accordion";
import Alert from "react-bootstrap/Alert";
import {
  Detail,
  DetailName,
  ErrorLabel,
  Form,
  InputGroup,
  LoadingContainer,
  ProductName,
  SubmitButton,
} from "./CheckoutForm.styles";
import { useForm } from "react-hook-form";
import { BeatLoader } from "react-spinners";
import axios from "axios";
import { useRouter } from "next/router";
import { emptyCart } from "../../../redux/cart/cart.slice";

const CheckoutForm = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  const cart = useSelector(state => state.cart.cartItems);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const [loadingCustomerData, setLoadingCustomerData] = useState(true);
  const [errorCustomerData, setErrorCustomerData] = useState(false);

  const {
    register: registerReg,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({ mode: "onBlur" });

  useEffect(() => {
    const fetchCustomerData = async () => {
      try {
        const customerData = await axios.get("/api/customer");

        //console.log(customerData.data);

        setLoadingCustomerData(false);

        const { data } = customerData;
        const { billing } = data;

        setValue("email", data.email);
        setValue("phone", billing.phone);
      } catch (error) {
        console.log(error);
        setErrorCustomerData(true);
      }
    };

    fetchCustomerData();
  }, []);

  const onSubmit = async data => {
    setLoading(true);

    let bodyRequest = {
      cart,
      customer: data,
    };

    const res = await axios.post("/api/orders", bodyRequest);
    console.log(res);

    if (res.status === 200) {
      dispatch(emptyCart());
      router.push("/thank-you");
    } else {
      setError(true);
    }
  };

  return (
    <div className="container g-0">
      <h3 className="mb-4">Оформление через личный кабинет</h3>
      <div className="row g-3">
        <div className="col-6">
          <h4 className="mb-4">Данные заказа</h4>
          {loadingCustomerData && (
            <Alert className="fs-6" variant={"primary"}>
              Загружаются данные...
            </Alert>
          )}
          {errorCustomerData && (
            <Alert className="fs-6" variant={"danger"}>
              Данные не смогли загрузится.
            </Alert>
          )}
          <Form onSubmit={handleSubmit(onSubmit)}>
            <InputGroup>
              <label>*Телефон:</label>
              <input {...registerReg("phone", { required: true })} />
              {errors.phone && (
                <ErrorLabel data-aos="fade">
                  Поле для обязательного заполнения.
                </ErrorLabel>
              )}
            </InputGroup>

            <InputGroup>
              <label>*Электронная почта:</label>
              <input
                type={"email"}
                {...registerReg("email", { required: true })}
              />
              {errors.email && (
                <ErrorLabel data-aos="fade">
                  Поле для обязательного заполнения.
                </ErrorLabel>
              )}
            </InputGroup>

            <InputGroup>
              <label>Город:</label>
              <input {...registerReg("city")} />
              {errors.city && (
                <ErrorLabel data-aos="fade">
                  Поле для обязательного заполнения.
                </ErrorLabel>
              )}
            </InputGroup>

            <InputGroup>
              <label>Адрес:</label>
              <input {...registerReg("address1")} />
            </InputGroup>

            {!loading ? (
              <SubmitButton type="submit">Отправить заказ</SubmitButton>
            ) : (
              <LoadingContainer>
                <BeatLoader color="#B19436" loading={true} size={14} />
              </LoadingContainer>
            )}
            {error && (
              <ErrorLabel data-aos="fade">
                Ошибка при попытке создать заказ.
              </ErrorLabel>
            )}
          </Form>
        </div>
        <div className="col-6">
          <h4 className="mb-4">Товары заказа</h4>
          <Accordion alwaysOpen={false}>
            {cart.map((item, key) => (
              <Accordion.Item className="mb-0" key={key} eventKey={key}>
                <Accordion.Header as={"div"}>
                  <div className="d-flex flex-column gap-2">
                    <Detail>
                      <ProductName>{item.name}</ProductName>
                    </Detail>
                    <Detail>
                      <DetailName>Кол.:</DetailName>
                      {item.quantity}
                    </Detail>
                    <Detail>
                      <DetailName>Итого:</DetailName>
                      {item.price} руб.
                    </Detail>
                  </div>
                </Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                </Accordion.Body>
              </Accordion.Item>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default CheckoutForm;
