import React from 'react';
import Pagination from 'react-bootstrap/Pagination';
import PageItem from 'react-bootstrap/PageItem';

export default function WebPagination({ winesPerPage, numberOfWines, pagination, currentPage, setCurrentPage }) {


    const pageNumbers = [];
    const numberOfPages = Math.ceil(numberOfWines / winesPerPage);
    console.log(numberOfPages)
    for (let i = 1; i <= Math.ceil(numberOfWines / winesPerPage); i++) {
        pageNumbers.push(i)
    };

    const nextPage = () => {
        if (currentPage !== numberOfPages) {
            setCurrentPage(currentPage + 1)
        }
    };

    const previousPage = () => {
        if (currentPage !== 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    if (pageNumbers.length === 1) {
        setCurrentPage(1)
    }

    return (
        <div style={{ display: "flex", justifyContent: "center" }}>
            <Pagination>

                <Pagination.Prev disabled={currentPage === 1 || numberOfPages === 1} onClick={previousPage} />

                {pageNumbers && pageNumbers.map(number => (
                    <Pagination.Item key={number} onClick={() => pagination(number)}>{number}</Pagination.Item>
                ))}

                <Pagination.Next disabled={currentPage === numberOfPages || numberOfPages === 1} onClick={nextPage} />

            </Pagination>
        </div>
    )
};