import React from 'react'
import { parseCookies } from 'nookies'
import axios from 'axios'
import { useToasts } from 'react-toast-notifications'
import { useRouter } from 'next/router'
import baseUrl from '@/utils/baseUrl'
import catchErrors from '@/utils/catchErrors'
import PageBanner from '@/components/Common/PageBanner'
import Link from '@/utils/ActiveLink'

const pendingRequests = ({pendingRequests}) => {
    // console.log(pendingRequests)
    const { addToast } = useToasts()
    const router = useRouter()

    const approveReq = async id => {
        try {
            const url = `${baseUrl}/api/v1/apply/approve-requests`
            const payload = { userId: id }
            const response = await axios.post(url, payload)
            // console.log(response.data)
            addToast(response.data, { 
                appearance: 'success'
            })
            router.push('/admin/pending-requests')
        } catch (error) {
            catchErrors(error, setError)
        }
    }

    const declineReq = async id => {
        try {
            const url = `${baseUrl}/api/v1/apply/decline-requests`
            const payload = { userId: id }
            const response = await axios.post(url, payload)
            // console.log(response.data)
            addToast(response.data, { 
                appearance: 'success'
            })
            router.push('/admin/pending-requests')
        } catch (error) {
            catchErrors(error, setError)
        }
    }

    return (
        <>
            <PageBanner 
                pageTitle="Admin Dashboard" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="Admin Dashboard" 
            /> 

            <div className="ptb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 col-lg-4">
                            <div className="td-sidebar">
                                <ul>
                                    <li>
                                        <Link href="/admin/pending-requests" activeClassName="active">
                                            <a>Pending Requests</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#" activeClassName="active">
                                            <a>Dumy Text</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#" activeClassName="active">
                                            <a>Dumy Text</a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-md-8 col-lg-8">

                            <div className="table-responsive">
                                <table className="table vertical-align-top">
                                    <thead>
                                        <tr>
                                            <th scope="col">#</th>
                                            <th scope="col">Intructor</th>
                                            <th scope="col" className="text-right">Action</th> 
                                        </tr>
                                    </thead>

                                    <tbody>
                                        {pendingRequests.length ? (
                                            <>
                                                {pendingRequests.map((request) => {
                                                    return (
                                                        <tr key={request.id}>
                                                            <th scope="row">1</th>
                                                            <td>
                                                                {request.name}
                                                            </td>
                                                            <td className="text-right">
                                                                <button
                                                                    onClick={ e => {
                                                                        window.confirm("Are you sure?") && approveReq(request.id)
                                                                    }} 
                                                                    className="btn btn-success mr-05"
                                                                >
                                                                    Approve
                                                                </button>

                                                                <button
                                                                    onClick={ e => {
                                                                        window.confirm("Are you sure?") && declineReq(request.id)
                                                                    }} 
                                                                    className="btn btn-danger"
                                                                >
                                                                    Decline
                                                                </button>
                                                            </td> 
                                                        </tr>   
                                                    )
                                                })}
                                            </>
                                        ) : (
                                            <tr className="text-center">
                                                <td colSpan="3">No Pending Requests!</td>
                                            </tr>
                                        )}
                                    </tbody>
                                </table> 
                            </div>

                            {/* {pendingRequests.length ? (
                                <>
                                    {pendingRequests.map((request) => {
                                        return (
                                            <ul key={request.id}>
                                                <li>
                                                    {request.name}
                                                    <button
                                                        onClick={ e => {
                                                            window.confirm("Are you sure?") && approveReq(request.id)
                                                        }}
                                                    >
                                                        Approve
                                                    </button>
                                                    <button
                                                        onClick={ e => {
                                                            window.confirm("Are you sure?") && declineReq(request.id)
                                                        }}
                                                    >
                                                        Decline
                                                    </button>
                                                </li>
                                            </ul>
                                        )
                                    })}
                                </>
                            ) : (
                                <ul>
                                    <li>No Pending Requests!</li>
                                </ul>
                            )} */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

pendingRequests.getInitialProps = async (ctx) => {
    // console.log(id)
    const { token } = parseCookies(ctx)
    if(!token){
        redirectUser(ctx, '/authentication')
    }
    const url = `${baseUrl}/api/v1/apply/pending-requests`
    const payload = { headers: {Authorization: token} }
    const response = await axios.get(url, payload)
    // console.log(response.data)
    return response.data
}

export default pendingRequests
