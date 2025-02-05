"use client";
import React, { useState, useEffect } from 'react'
import { FormDataTypes } from '@/Types/Forms.type';
import { useForm } from 'react-hook-form';
import { Button, Col, Row, Card, CardBody, Container, Form, FormFeedback, Label, Tooltip } from 'reactstrap';
import FilterComponent from '../../../Components/Tables/DataTables/Common/FilterComponent';
import DataTable from 'react-data-table-component';
import { TableColumn } from "react-data-table-component";
import CommonModal from '../../../Components/UiKits/Modal/Common/CommonModal';
import { Href } from "@/Constant";
import * as Yup from 'yup';
import { useRouter } from "next/navigation";

const Employee = () => {
  const router = useRouter();
  const [filterText, setFilterText] = useState('');
  const [validate, setValidate] = useState(false);
  const [validateRegiter, setValidateRegiter] = useState(false);
  const [modal, setModal] = useState(false);
  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormDataTypes>();
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [tooltip, setTooltip] = useState(false);
  const toggle = () => setTooltip(!tooltip);
  const [isLoading, setIsLoading] = useState("");

  const {
    register: formRegister,
    handleSubmit: handleSubmitRegister,
    formState: { errors: errorsRegisterForm },
    setValue: valueFile,
    reset: restInputValue,
  } = useForm<FormDataTypes>();

  const handleFilterToggle = () => {
    setIsFilterOpen((prevState) => !prevState);
    reset();
    restInputValue();
    setValidate(false);
  };

  const onSubmitFilter = () => {
    setValidate(true);
    reset();
    restInputValue();
    setValidate(false);
    setIsFilterOpen(false)
  };

  const onSubmitRegister = () => {
    setValidateRegiter(true);
    reset();
    restInputValue();
  };

  const registerModal = () => {
    setModal(!modal);
    restInputValue();
    setIsFilterOpen(false);
    setTooltip(false);
  }

  const modalOptions = {
    isOpen: modal,
    header: true,
    toggler: registerModal,
    title: 'Create account',
    size: 'lg',
    bodyClass: 'dark-modal',
  }

  const listColumnsViewData: TableColumn<tableListColumns>[] = [
 
    {
      name: "Name",
      selector: (row) => row.name,
      sortable: true,
      center: false,
      wrap: true,
      width: '14%',
    },

    {
      name: "Unternehmen",
      selector: (row) => row.Unternehmen,
      sortable: true,
      center: false,
      // width: '11%',
      cell: (row) => (
        <span className={` ${row.Unternehmen === 'On' ? 'success-color' : 'secondary-color'}`}>{row.Unternehmen}</span>
      ),
    },
    {
      name: "Rolle",
      selector: (row) => row.Rolle,
      sortable: true,
      center: false,
      // width: '11%',
      cell: (row) => (
        <span className={` ${row.Rolle === 'On' ? 'success-color' : 'secondary-color'}`}>{row.Rolle}</span>
      ),
    },
    {
      name: "Status",
      selector: (row) => row.Status,
      sortable: true,
      center: false,
      // width: '12%',
    }, 
    {
      name: "Action",
      sortable: true,
      center: false,
      cell: () => (
        <ul className="action">
          <li className="edit">
            <a href={Href} onClick={() => redirectEditOrganization()}>
              <i className="icon-pencil-alt" />
            </a>
          </li>
        </ul>
      ),
    },
  ];

  const dashboardTableData: any = [
    {
      name: "Tanner Finsha",
      Unternehmen: "ABC Corp",
      Rolle: "Manager",
      Status: "Active",
    },
    {
      name: "Tanner Finsha",
      Unternehmen: "ABC Corp",
      Rolle: "Manager",
      Status: "Active",
    },
    {
      name: "Tanner Finsha",
      Unternehmen: "ABC Corp",
      Rolle: "Manager",
      Status: "Active",
    },
    {
      name: "Tanner Finsha",
      Unternehmen: "ABC Corp",
      Rolle: "Manager",
      Status: "Active",
    },
    {
      name: "Tanner Finsha",
      Unternehmen: "ABC Corp",
      Rolle: "Manager",
      Status: "Active",
    },
    {
      name: "Tanner Finsha",
      Unternehmen: "ABC Corp",
      Rolle: "Manager",
      Status: "Active",
    },
    {
      name: "Tanner Finsha",
      Unternehmen: "ABC Corp",
      Rolle: "Manager",
      Status: "Active",
    },
    {
      name: "Tanner Finsha",
      Unternehmen: "ABC Corp",
      Rolle: "Manager",
      Status: "Active",
    },
    {
      name: "Tanner Finsha",
      Unternehmen: "ABC Corp",
      Rolle: "Manager",
      Status: "Active",
    },
    {
      name: "Tanner Finsha",
      Unternehmen: "ABC Corp",
      Rolle: "Manager",
      Status: "Active",
    },
    {
       
      name: "Tanner Finsha",
      Unternehmen: "ABC Corp",
      Rolle: "Manager",
      Status: "Active",
       
    },
  ];

  const filteredItems: any = dashboardTableData.filter(
    (item: any) => {
      return Object.values(item).some((value) =>
        value && value.toString().toLowerCase().includes(filterText.toLowerCase())
      );
    }
  );

  const redirectEditOrganization = () => {
    router.push("/accounts/edit-organization");
  }

  useEffect(() => {
    setIsLoading("apiLoad");
    const timer = setTimeout(() => setIsLoading(""), 3000);
    return () => clearTimeout(timer);
  }, []);


  return (
    <>
      <Container fluid>
      <div className="page-title">
              <Row>
                <Col sm={6} className="p-0">
                  <h3>Mitarbeiterin</h3>
                </Col>
              </Row>
        </div>
        <Row>
          <Col sm={12}>
            <Card>
              <CardBody>
                <div className="d-flex justify-content-end align-items-center flex-nowrap">
                  <Col xs="auto" className="pe-3">
                    <FilterComponent
                      onFilter={(e) => setFilterText(e.target.value)}
                      filterText={filterText}
                    />
                  </Col>
                </div>
                <div className="table-responsive custom-scrollbar mt-3">
                  <DataTable className='display' data={filteredItems} columns={listColumnsViewData} striped={true} pagination />
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Employee;

export interface tableListColumns {
 
  name: string;
  Unternehmen: string;
  Rolle: string;
  Status: string;
 
}