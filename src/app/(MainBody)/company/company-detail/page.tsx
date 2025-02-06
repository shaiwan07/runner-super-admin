 "use client";
import React, { useState } from 'react'
import { Container, Row, Col } from 'reactstrap';
import { Fragment } from "react";
import { totalRevenueData } from "@/Data/General/Dashboard/EcommerceDashboard";
import CommonTotalRevenueCard from "../../../../Components/General/Dashboard/EcommerceDashboard/TotalRevenue/CommonTotalRevenueCard";
import { Card, CardBody } from "reactstrap";
import DashboardCommonHeader from "../../../../Components/General/Dashboard/Common/DashboardCommonHeader";
import { turnOverChart } from '@/Data/General/Widgets/ChartWidgets'
import { companyViewChartData } from "@/Data/General/Dashboard/ProjectDashboard";
import { ApexOptions } from "apexcharts";
import FilterComponent from '../../../../Components/Tables/DataTables/Common/FilterComponent';
import DataTable from 'react-data-table-component';
import { TableColumn } from "react-data-table-component";
import dynamic from "next/dynamic";
const ReactApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });

const CompanyDetail = () => {
  const [filterText, setFilterText] = useState('');

  const monthlyHistoryChart: ApexOptions = {
    series: [
      // {
      //     name: "Profit",
      //     data: [100, 50, 25, 50, 30, 50, 70],
      // },
      // {
      //     name: "Revenue",
      //     data: [70, 20, 55, 45, 35, 110, 85],
      // },
      {
        name: "Cash Flow",
        data: [85, 55, 100, 35, 90, 60, 80],
      },
    ],
    chart: {
      type: "bar",
      height: 380,
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "30%",
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 1,
      colors: ["transparent"],
      curve: "smooth",
      lineCap: "butt",
    },
    xaxis: {
      categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
      floating: false,
      axisTicks: {
        show: false,
      },
      axisBorder: {
        color: "#C4C4C4",
      },
    },
    yaxis: {
      title: {
        text: "Dollars in thounand",
        style: {
          fontSize: "14px",
          fontFamily: "Roboto, sans-serif",
          fontWeight: 500,
        },
      },
    },
    colors: ['#FE6A49', "#51bb25", "#5C61F2"],
    fill: {
      type: "gradient",
      gradient: {
        shade: "light",
        type: "vertical",
        shadeIntensity: 0.1,
        inverseColors: false,
        opacityFrom: 1,
        opacityTo: 0.9,
        stops: [0, 100],
      },
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return "$ " + val + " thousands";
        },
      },
    },
    responsive: [
      {
        breakpoint: 576,
        options: {
          chart: {
            height: 200,
          },
        },
      },
    ],
  };

  const listColumnsViewData: TableColumn<tableListColumns>[] = [
    {
      name: "Name der Firma",
      selector: (row) => row.companyName,
      sortable: true,
      center: false,
    },
    
    {
      name: "Administratorname",
      selector: (row) => row.admin,
      sortable: true,
      center: false,
    },
    {
      name: "Abonnement",
      selector: (row) => row.subscription,
      sortable: true,
      center: false,
    },
    {
      name: "Status",
      selector: (row) => row.status,
      sortable: true,
      center: false,
    },
    
  ];

  const dashboardTableData: any = [
    {
      companyName: 'Company 1',
     
      admin: "John",
      subscription: "Platinum",
      status: "Active",
    },
    {
      companyName: 'Company 1',
     
      admin: "John",
      subscription: "Platinum",
      status: "Active",
    },
    {
      companyName: 'Company 1',
      
      admin: "John",
      subscription: "Platinum",
      status: "Active",
    },
    {
      companyName: 'Company 1',
      
      admin: "John",
      subscription: "Platinum",
      status: "Active",
    },
    {
      companyName: 'Company 1',
       
      admin: "John",
      subscription: "Platinum",
      status: "Active",
    },
    {
      companyName: 'Company 1',
      
      admin: "John",
      subscription: "Platinum",
      status: "Active",
    },
  ];

  const filteredItems: any = dashboardTableData.filter(
    (item: any) => {
      return Object.values(item).some((value) =>
        value && value.toString().toLowerCase().includes(filterText.toLowerCase())
      );
    }
  );
  return (
    <>
      <Container fluid>
        <div className="page-title">
          <Row>
            <Col sm={6} className="p-0">
              <h3>Amaz construction</h3>
            </Col>
          </Row>
        </div>
      </Container>
      <Container fluid className="ecommerce-dashboard">
        <Row>
          <Col xxl={12} lg={12} xl={12} className="box-col-7">
            <Row>
              {totalRevenueData.map((data, i) => (
                <Fragment key={i}>
                  <CommonTotalRevenueCard icon={data.icon} amount={data.amount} title={data.title}
                    arrowIcon={data.arrowIcon} percentage={data.percentage} chart={data.chart}
                    divClass={data.divClass} chartClass={data.chartClass}
                  />
                </Fragment>
              ))}
            </Row>
          </Col>
        </Row>
    

        <Row>
          <Col sm={12}>
            <Card>
              <CardBody className='pb-0'>
                <div className="d-flex justify-content-end align-items-center flex-nowrap">
                  <Col xs='auto'>
                    <FilterComponent
                      onFilter={(e: React.ChangeEvent<HTMLInputElement>) => setFilterText(e.target.value)}
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

export default CompanyDetail;

export interface tableListColumns {
  companyName: string;
  admin: string;
  subscription: string;
  status: string;
}