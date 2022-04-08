import { Form, Formik } from "formik";
import React from "react";
import Field from "../form/Field";

export default function UserDetails({ data, onOk }) {
  if (!data) return null;
  return (
    <Formik initialValues={data}>
      <Form className="row g-3">
        <div className="col-md-12">
          <label htmlFor="user-id" className="form-label">
            Springspree ID
          </label>
          <Field
            disabled
            name="_id"
            type="text"
            className="form-control"
            id="user-id"
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="name" className="form-label">
            Full Name
          </label>
          <Field
            disabled
            name="name"
            placeholder="Elon Musk"
            type="text"
            className="form-control"
            id="name"
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <Field
            disabled
            name="email"
            placeholder="elon@mars.com"
            type="email"
            className="form-control"
            id="email"
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="mobile" className="form-label">
            Mobile/Phone
          </label>
          <Field
            disabled
            name="mobile"
            placeholder="+919988774455"
            type="tel"
            className="form-control"
            id="mobile"
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="college" className="form-label">
            College
          </label>
          <Field
            disabled
            name="college"
            placeholder="Mars Institute of Technology"
            type="text"
            className="form-control"
            id="college"
          />
        </div>
        <div className="col-md-6">
          <div className="form-check">
            <label htmlFor="accomodation" className="form-check-label">
              Accomodation
            </label>
            <Field
              disabled
              name="paidForAccomodation"
              type="checkbox"
              className="form-check-input"
              id="accomodation"
            />
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-check">
            <label htmlFor="proshow-1" className="form-check-label">
              Proshow 1
            </label>
            <Field
              disabled
              name="paidForProshow1"
              type="checkbox"
              className="form-check-input"
              id="proshow-1"
            />
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-check">
            <label htmlFor="proshow-2" className="form-check-label">
              Proshow 2
            </label>
            <Field
              disabled
              name="paidForProshow2"
              type="checkbox"
              className="form-check-input"
              id="proshow-2"
            />
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-check">
            <label htmlFor="proshow-3" className="form-check-label">
              Proshow 3
            </label>
            <Field
              disabled
              name="paidForProshow3"
              type="checkbox"
              className="form-check-input"
              id="proshow-3"
            />
          </div>
        </div>

        <div className="col-md-6">
          <label htmlFor="mode" className="form-label">
            Payment Mode
          </label>
          <Field
            disabled
            name="paymentMode"
            placeholder="Payment mode"
            className="form-select"
            id="mode"
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="transaction" className="form-label">
            Transation ID
          </label>
          <Field
            disabled
            name="transactionId"
            placeholder='Fill "N/A" for cash mode'
            type="text"
            className="form-control"
            id="transaction"
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="amount-paid" className="form-label">
            Amount Paid
          </label>
          <Field
            disabled
            name="amountPaid"
            type="number"
            className="form-control"
            id="amount-paid"
          />
        </div>
        <div className="col-12">
          <button type="button" onClick={onOk} className="btn btn-primary">
            Add another
          </button>
        </div>
      </Form>
    </Formik>
  );
}
