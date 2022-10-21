import React from 'react';
import 'jquery/dist/jquery.min';
import 'datatables.net';
import { Table } from 'react-bootstrap';

const $ = require('jquery');
$.DataTable = require('datatables.net');

export default function User() {
    const dataSet = [
        [ "<div className='table-avatar'><div><a href='#' className='avatar_text'>AK</a></div><div><h6 className='avatar_title'>Animesh kumar</h6><p className='avatar_email'>animesh.kumar@webeesocial.com</p></div></div>", "Associate Art Direction", "Manager", "<a href='#' className='text-success'>Accepted</a>", "<a href='#' className='text-primary me-2'>Edit</a> <a href='#' className='text-danger'>Remove</a>", "2011/04/25" ],
        [ "<div className='table-avatar'><div><a href='#' className='avatar_text'>AK</a></div><div><h6 className='avatar_title'>Animesh kumar</h6><p className='avatar_email'>animesh.kumar@webeesocial.com</p></div></div>", "Associate Art Direction", "Manager", "<a href='#' className='text-success'>Accepted</a>", "<a href='#' className='text-primary me-2'>Edit</a> <a href='#' className='text-danger'>Remove</a>", "2011/04/25" ],
        [ "<div className='table-avatar'><div><a href='#' className='avatar_text'>AK</a></div><div><h6 className='avatar_title'>Animesh kumar</h6><p className='avatar_email'>animesh.kumar@webeesocial.com</p></div></div>", "Associate Art Direction", "Manager", "<a href='#' className='text-success'>Accepted</a>", "<a href='#' className='text-primary me-2'>Edit</a> <a href='#' className='text-danger'>Remove</a>", "2011/04/25" ],
        [ "<div className='table-avatar'><div><a href='#' className='avatar_text'>AK</a></div><div><h6 className='avatar_title'>Animesh kumar</h6><p className='avatar_email'>animesh.kumar@webeesocial.com</p></div></div>", "Associate Art Direction", "Manager", "<a href='#' className='text-success'>Accepted</a>", "<a href='#' className='text-primary me-2'>Edit</a> <a href='#' className='text-danger'>Remove</a>", "2011/04/25" ],
        [ "<div className='table-avatar'><div><a href='#' className='avatar_text'>AK</a></div><div><h6 className='avatar_title'>Animesh kumar</h6><p className='avatar_email'>animesh.kumar@webeesocial.com</p></div></div>", "Associate Art Direction", "Manager", "<a href='#' className='text-success'>Accepted</a>", "<a href='#' className='text-primary me-2'>Edit</a> <a href='#' className='text-danger'>Remove</a>", "2011/04/25" ],
        [ "<div className='table-avatar'><div><a href='#' className='avatar_text'>AK</a></div><div><h6 className='avatar_title'>Animesh kumar</h6><p className='avatar_email'>animesh.kumar@webeesocial.com</p></div></div>", "Associate Art Direction", "Manager", "<a href='#' className='text-success'>Accepted</a>", "<a href='#' className='text-primary me-2'>Edit</a> <a href='#' className='text-danger'>Remove</a>", "2011/04/25" ],
        [ "<div className='table-avatar'><div><a href='#' className='avatar_text'>AK</a></div><div><h6 className='avatar_title'>Animesh kumar</h6><p className='avatar_email'>animesh.kumar@webeesocial.com</p></div></div>", "Associate Art Direction", "Manager", "<a href='#' className='text-success'>Accepted</a>", "<a href='#' className='text-primary me-2'>Edit</a> <a href='#' className='text-danger'>Remove</a>", "2011/04/25" ],
        [ "<div className='table-avatar'><div><a href='#' className='avatar_text'>AK</a></div><div><h6 className='avatar_title'>Animesh kumar</h6><p className='avatar_email'>animesh.kumar@webeesocial.com</p></div></div>", "Associate Art Direction", "Manager", "<a href='#' className='text-success'>Accepted</a>", "<a href='#' className='text-primary me-2'>Edit</a> <a href='#' className='text-danger'>Remove</a>", "2011/04/25" ],
        [ "<div className='table-avatar'><div><a href='#' className='avatar_text'>AK</a></div><div><h6 className='avatar_title'>Animesh kumar</h6><p className='avatar_email'>animesh.kumar@webeesocial.com</p></div></div>", "Associate Art Direction", "Manager", "<a href='#' className='text-success'>Accepted</a>", "<a href='#' className='text-primary me-2'>Edit</a> <a href='#' className='text-danger'>Remove</a>", "2011/04/25" ],
        [ "<div className='table-avatar'><div><a href='#' className='avatar_text'>AK</a></div><div><h6 className='avatar_title'>Animesh kumar</h6><p className='avatar_email'>animesh.kumar@webeesocial.com</p></div></div>", "Associate Art Direction", "Manager", "<a href='#' className='text-success'>Accepted</a>", "<a href='#' className='text-primary me-2'>Edit</a> <a href='#' className='text-danger'>Remove</a>", "2011/04/25" ],
        [ "<div className='table-avatar'><div><a href='#' className='avatar_text'>AK</a></div><div><h6 className='avatar_title'>Animesh kumar</h6><p className='avatar_email'>animesh.kumar@webeesocial.com</p></div></div>", "Associate Art Direction", "Manager", "<a href='#' className='text-success'>Accepted</a>", "<a href='#' className='text-primary me-2'>Edit</a> <a href='#' className='text-danger'>Remove</a>", "2011/04/25" ],
        [ "<div className='table-avatar'><div><a href='#' className='avatar_text'>AK</a></div><div><h6 className='avatar_title'>Animesh kumar</h6><p className='avatar_email'>animesh.kumar@webeesocial.com</p></div></div>", "Associate Art Direction", "Manager", "<a href='#' className='text-success'>Accepted</a>", "<a href='#' className='text-primary me-2'>Edit</a> <a href='#' className='text-danger'>Remove</a>", "2011/04/25" ],
        [ "<div className='table-avatar'><div><a href='#' className='avatar_text'>AK</a></div><div><h6 className='avatar_title'>Animesh kumar</h6><p className='avatar_email'>animesh.kumar@webeesocial.com</p></div></div>", "Associate Art Direction", "Manager", "<a href='#' className='text-success'>Accepted</a>", "<a href='#' className='text-primary me-2'>Edit</a> <a href='#' className='text-danger'>Remove</a>", "2011/04/25" ],
        [ "<div className='table-avatar'><div><a href='#' className='avatar_text'>AK</a></div><div><h6 className='avatar_title'>Animesh kumar</h6><p className='avatar_email'>animesh.kumar@webeesocial.com</p></div></div>", "Associate Art Direction", "Manager", "<a href='#' className='text-success'>Accepted</a>", "<a href='#' className='text-primary me-2'>Edit</a> <a href='#' className='text-danger'>Remove</a>", "2011/04/25" ],
        [ "<div className='table-avatar'><div><a href='#' className='avatar_text'>AK</a></div><div><h6 className='avatar_title'>Animesh kumar</h6><p className='avatar_email'>animesh.kumar@webeesocial.com</p></div></div>", "Associate Art Direction", "Manager", "<a href='#' className='text-success'>Accepted</a>", "<a href='#' className='text-primary me-2'>Edit</a> <a href='#' className='text-danger'>Remove</a>", "2011/04/25" ],
        [ "<div className='table-avatar'><div><a href='#' className='avatar_text'>AK</a></div><div><h6 className='avatar_title'>Animesh kumar</h6><p className='avatar_email'>animesh.kumar@webeesocial.com</p></div></div>", "Associate Art Direction", "Manager", "<a href='#' className='text-success'>Accepted</a>", "<a href='#' className='text-primary me-2'>Edit</a> <a href='#' className='text-danger'>Remove</a>", "2011/04/25" ],
        [ "<div className='table-avatar'><div><a href='#' className='avatar_text'>AK</a></div><div><h6 className='avatar_title'>Animesh kumar</h6><p className='avatar_email'>animesh.kumar@webeesocial.com</p></div></div>", "Associate Art Direction", "Manager", "<a href='#' className='text-success'>Accepted</a>", "<a href='#' className='text-primary me-2'>Edit</a> <a href='#' className='text-danger'>Remove</a>", "2011/04/25" ],
        [ "<div className='table-avatar'><div><a href='#' className='avatar_text'>AK</a></div><div><h6 className='avatar_title'>Animesh kumar</h6><p className='avatar_email'>animesh.kumar@webeesocial.com</p></div></div>", "Associate Art Direction", "Manager", "<a href='#' className='text-success'>Accepted</a>", "<a href='#' className='text-primary me-2'>Edit</a> <a href='#' className='text-danger'>Remove</a>", "2011/04/25" ],
        [ "<div className='table-avatar'><div><a href='#' className='avatar_text'>AK</a></div><div><h6 className='avatar_title'>Animesh kumar</h6><p className='avatar_email'>animesh.kumar@webeesocial.com</p></div></div>", "Associate Art Direction", "Manager", "<a href='#' className='text-success'>Accepted</a>", "<a href='#' className='text-primary me-2'>Edit</a> <a href='#' className='text-danger'>Remove</a>", "2011/04/25" ],
        [ "<div className='table-avatar'><div><a href='#' className='avatar_text'>AK</a></div><div><h6 className='avatar_title'>Animesh kumar</h6><p className='avatar_email'>animesh.kumar@webeesocial.com</p></div></div>", "Associate Art Direction", "Manager", "<a href='#' className='text-success'>Accepted</a>", "<a href='#' className='text-primary me-2'>Edit</a> <a href='#' className='text-danger'>Remove</a>", "2011/04/25" ],
        [ "<div className='table-avatar'><div><a href='#' className='avatar_text'>AK</a></div><div><h6 className='avatar_title'>Animesh kumar</h6><p className='avatar_email'>animesh.kumar@webeesocial.com</p></div></div>", "Associate Art Direction", "Manager", "<a href='#' className='text-success'>Accepted</a>", "<a href='#' className='text-primary me-2'>Edit</a> <a href='#' className='text-danger'>Remove</a>", "2011/04/25" ],
        [ "<div className='table-avatar'><div><a href='#' className='avatar_text'>AK</a></div><div><h6 className='avatar_title'>Animesh kumar</h6><p className='avatar_email'>animesh.kumar@webeesocial.com</p></div></div>", "Associate Art Direction", "Manager", "<a href='#' className='text-success'>Accepted</a>", "<a href='#' className='text-primary me-2'>Edit</a> <a href='#' className='text-danger'>Remove</a>", "2011/04/25" ],
        [ "<div className='table-avatar'><div><a href='#' className='avatar_text'>AK</a></div><div><h6 className='avatar_title'>Animesh kumar</h6><p className='avatar_email'>animesh.kumar@webeesocial.com</p></div></div>", "Associate Art Direction", "Manager", "<a href='#' className='text-success'>Accepted</a>", "<a href='#' className='text-primary me-2'>Edit</a> <a href='#' className='text-danger'>Remove</a>", "2011/04/25" ],
        [ "<div className='table-avatar'><div><a href='#' className='avatar_text'>AK</a></div><div><h6 className='avatar_title'>Animesh kumar</h6><p className='avatar_email'>animesh.kumar@webeesocial.com</p></div></div>", "Associate Art Direction", "Manager", "<a href='#' className='text-success'>Accepted</a>", "<a href='#' className='text-primary me-2'>Edit</a> <a href='#' className='text-danger'>Remove</a>", "2011/04/25" ]
    ];

    $(function(){
        $('#usersData').DataTable( {
            retrieve: true,
            data: dataSet,
            columns: [
                { title: "Name" },
                { title: "Designation" },
                { title: "Role" },
                { title: "Status" },
                { title: "Action" },
                { title: "Member Since" }
            ]
        });
    });
    return (
        <>
            <Table id="usersData" className="table-style1" responsive="sm"></Table>
        </>
    );
}
