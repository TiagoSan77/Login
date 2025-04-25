import styled from "styled-components";

export const TableStyles = styled.table`
    width: 100%;
    border-collapse: collapse;
    margin: 20px 0;
    font-size: 1.2em;
    font-family: 'Arial', sans-serif;
    color: #333;
    
    th, td {
        padding: 12px;
        text-align: left;
        border-bottom: 1px solid #ddd;
    }
    
    th {
        background-color: #f4f4f4;
        color: #333;
    }
    
    tr:hover {
        background-color: #f1f1f1;
    }
`