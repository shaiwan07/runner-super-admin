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

const Documents = () => {
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
      name: "Acc Id",
      selector: (row) => row.accId,
      sortable: true,
      center: false,
    },
    {
      name: "Name",
      selector: (row) => row.name,
      sortable: true,
      center: false,
      wrap: true,
      width: '14%',
    },

    {
      name: "Adv. Profile",
      selector: (row) => row.advProfile,
      sortable: true,
      center: false,
      // width: '11%',
      cell: (row) => (
        <span className={` ${row.advProfile === 'On' ? 'success-color' : 'secondary-color'}`}>{row.advProfile}</span>
      ),
    },
    {
      name: "DSP Profile",
      selector: (row) => row.dspProfile,
      sortable: true,
      center: false,
      // width: '11%',
      cell: (row) => (
        <span className={` ${row.dspProfile === 'On' ? 'success-color' : 'secondary-color'}`}>{row.dspProfile}</span>
      ),
    },
    {
      name: "Camp. Group",
      selector: (row) => row.campGroup,
      sortable: true,
      center: false,
      // width: '12%',
    },
    {
      name: "Camp.",
      selector: (row) => row.camp,
      sortable: true,
      center: false,
      // width: '8%',
    },
    {
      name: "Ads.",
      selector: (row) => row.ads,
      sortable: true,
      center: false,
      // width: '7%',
    },
    {
      name: "MTD Rev. ($)",
      selector: (row) => row.mtdRev,
      sortable: true,
      center: false,
      // width: '12%',
    },
    {
      name: "Lifetime Rev. ($)",
      selector: (row) => row.lifeTimeRev,
      sortable: true,
      center: false,
      // width: '13%',
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
      accId: '2286',
      name: "APPTV",
      advProfile: "On",
      dspProfile: "On",
      campGroup: "1",
      camp: "0",
      ads: "0",
      mtdRev: "-",
      lifeTimeRev: "-",
    },
    {
      accId: '2281',
      name: "Vashoot",
      advProfile: "On",
      dspProfile: "Off",
      campGroup: "1",
      camp: "0",
      ads: "0",
      mtdRev: "-",
      lifeTimeRev: "-",
    },
    {
      accId: '2268',
      name: "tech2024",
      advProfile: "On",
      dspProfile: "Off",
      campGroup: "1",
      camp: "0",
      ads: "0",
      mtdRev: "-",
      lifeTimeRev: "-",
    },
    {
      accId: '2260',
      name: "software developer",
      advProfile: "On",
      dspProfile: "Off",
      campGroup: "1",
      camp: "0",
      ads: "0",
      mtdRev: "-",
      lifeTimeRev: "-",
    },
    {
      accId: '2257',
      name: "software developer",
      advProfile: "On",
      dspProfile: "Off",
      campGroup: "1",
      camp: "0",
      ads: "0",
      mtdRev: "-",
      lifeTimeRev: "-",
    },
    {
      accId: '2286',
      name: "APPTV",
      advProfile: "On",
      dspProfile: "On",
      campGroup: "1",
      camp: "0",
      ads: "0",
      mtdRev: "-",
      lifeTimeRev: "-",
    },
    {
      accId: '2281',
      name: "Vashoot",
      advProfile: "On",
      dspProfile: "Off",
      campGroup: "1",
      camp: "0",
      ads: "0",
      mtdRev: "-",
      lifeTimeRev: "-",
    },
    {
      accId: '2260',
      name: "software developer",
      advProfile: "On",
      dspProfile: "Off",
      campGroup: "1",
      camp: "0",
      ads: "0",
      mtdRev: "-",
      lifeTimeRev: "-",
    },
    {
      accId: '2257',
      name: "software developer",
      advProfile: "On",
      dspProfile: "Off",
      campGroup: "1",
      camp: "0",
      ads: "0",
      mtdRev: "-",
      lifeTimeRev: "-",
    },
    {
      accId: '2286',
      name: "APPTV",
      advProfile: "On",
      dspProfile: "On",
      campGroup: "1",
      camp: "0",
      ads: "0",
      mtdRev: "-",
      lifeTimeRev: "-",
    },
    {
      accId: '2281',
      name: "Vashoot",
      advProfile: "On",
      dspProfile: "Off",
      campGroup: "1",
      camp: "0",
      ads: "0",
      mtdRev: "-",
      lifeTimeRev: "-",
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
                  <h3>Dokumenten</h3>
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

export default Documents;

export interface tableListColumns {
  accId: number;
  name: string;
  advProfile: string;
  dspProfile: string;
  campGroup: string;
  camp: string;
  ads: string;
  mtdRev: string;
  lifeTimeRev: string;
}