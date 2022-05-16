import { Table, Typography } from 'antd';

const { Text } = Typography;

const columns = [
    {
        title: 'SL',
        dataIndex: 'sl',
    },
    {
        title: 'Customer Name',
        dataIndex: 'customername',
    },
    {
        title: 'Contact Person',
        dataIndex: 'contactperson',
    },
    {
        title: 'Address',
        dataIndex: 'address',
    },
    {
        title: 'Contact Number',
        dataIndex: 'contactnumber',
    },
    {
        title: 'Previous Dues',
        dataIndex: 'previousdues',
    },
];

const data = [
    {
        sl: '1',
        customername: 'Abdulllah',
        contactperson: 'Ahmed',
        previousdues: 10,
        address: 'Uttara Sector 14',
        contactnumber: '55555'
    },
    {
        sl: '2',
        customername: 'Abdulllah',
        contactperson: 'Ahmed',
        previousdues: 10,
        address: 'Uttara Sector 14',
        contactnumber: '55555'

    },
    {
        sl: '3',
        customername: 'Abdulllah',
        contactperson: 'Ahmed',
        previousdues: 10,
        address: 'Uttara Sector 14',
        contactnumber: '55555'
    },
    {
        sl: '4',
        customername: 'Abdulllah',
        contactperson: 'Ahmed',
        previousdues: 10,
        address: 'Uttara Sector 14',
        contactnumber: '55555'
    },
    {
        sl: '5',
        customername: 'Abdulllah',
        contactperson: 'Ahmed',
        previousdues: 10,
        address: 'Uttara Sector 14',
        contactnumber: '55555'
    },



];





export default () => (
    <>
        <Table
            columns={columns}
            dataSource={data}
            pagination={false}
            scroll={{ x: 500 }}
            bordered
            summary={pageData => {
                let totalDue = 0;

                pageData.forEach(({ previousdues }) => {
                    totalDue += previousdues;

                });

                return (
                    <>
                        <Table.Summary.Row>
                            <Table.Summary.Cell colSpan={5}><h3><Text type="danger">Total Due</Text></h3></Table.Summary.Cell>
                            <Table.Summary.Cell><h3><Text type="danger">{totalDue}</Text></h3></Table.Summary.Cell>
                        </Table.Summary.Row>

                    </>
                );
            }}
        />

        <br />


    </>
);