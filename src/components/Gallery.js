import React from 'react'

function Gallery() {
  return (
    <div className='container' id="gallery" style={{ padding:'5vh', backgroundColor: '#FFF5EA', opacity: '0.9'}}>
      <h1 style={{fontFamily: 'Quicksand', color: '#968C83', marginBottom: '5vh'}}><b> Gallery </b></h1>
      <div className = 'row' style={{display: "inline-block"}}>   
         {/* FIRST ROW  */}
        <img className="img-fluid rounded-3" alt='photo2' src={"https://red-thin-mammal-568.mypinata.cloud/ipfs/QmQa96qE4feFfbYx1SP8JDusjjzNqqe7YUKMD58SaFUuAX?_gl=1*1ce0yyc*_ga*ODAyODE4MDgxLjE2OTc2ODgzNjA.*_ga_5RMPXG14TE*MTY5NzgxNDM5Ny43LjAuMTY5NzgxNDM5OS41OC4wLjA."} style={{width: '50%', marginBottom: '2vh'}}/>
        <img className="img-fluid rounded-3" alt='photo2' src={"https://red-thin-mammal-568.mypinata.cloud/ipfs/QmTxVwZpyiWYBNifX4wM44S8KsA5KyFnSrhNZGS81yadLt?_gl=1*emcqu9*_ga*NjIxMTA3OTI2LjE2OTgyOTk3MjA.*_ga_5RMPXG14TE*MTY5ODMxNTk1NC4zLjEuMTY5ODMxNjAwMS4xMy4wLjA."} style={{width: '50%', marginBottom: '2vh'}}/>


         {/* SECOND ROW  */}
        <img className="img-fluid rounded-3" alt='photo3' src={"https://red-thin-mammal-568.mypinata.cloud/ipfs/QmfZD6CkF8CeBb6j9qiD49fxqN6NxdE9kXkyqBRRQ6gCnx?_gl=1*e0oumk*_ga*NjIxMTA3OTI2LjE2OTgyOTk3MjA.*_ga_5RMPXG14TE*MTY5ODI5OTcyMi4xLjEuMTY5ODMwMDQyOS41Ny4wLjA."} style={{width: '33%', marginBottom: '2vh'}}/>
        <img className="img-fluid rounded-3" alt='photo3' src={"https://red-thin-mammal-568.mypinata.cloud/ipfs/QmYtJsbA8ChFeYPCktznruw8FdsVcpZZjLcrdyjzCPAc4N?_gl=1*l4riuh*_ga*NjIxMTA3OTI2LjE2OTgyOTk3MjA.*_ga_5RMPXG14TE*MTY5ODI5OTcyMi4xLjEuMTY5ODI5OTc1Ny4yNS4wLjA."} style={{width: '33%', marginBottom: '2vh'}}/>
        <img className="img-fluid rounded-3" alt='photo3' src={"https://red-thin-mammal-568.mypinata.cloud/ipfs/QmQ83VUqSs4KwH4z7s29gXVNPHbKyL4wdfMoEJbF1od6QK?_gl=1*beaclm*_ga*NjIxMTA3OTI2LjE2OTgyOTk3MjA.*_ga_5RMPXG14TE*MTY5ODI5OTcyMi4xLjEuMTY5ODMwMDE1NC40My4wLjA."} style={{width: '33%', marginBottom: '2vh'}}/>

         {/* THIRD ROW  */}
         <img className="img-fluid rounded-3" alt='photo3' src={"https://red-thin-mammal-568.mypinata.cloud/ipfs/QmVdj2X9Dp5fwME1VDkPTXAUF2ojuq7mZJH3dvqhaRfNoF?_gl=1*1u0hims*_ga*NjIxMTA3OTI2LjE2OTgyOTk3MjA.*_ga_5RMPXG14TE*MTY5ODMwODExNC4yLjAuMTY5ODMwODE1MS4yMy4wLjA."} style={{width: '33%', marginBottom: '2vh'}}/>
         <img className="img-fluid rounded-3" alt='photo3' src={"https://red-thin-mammal-568.mypinata.cloud/ipfs/QmbcDLPnTkkcdZQMxvzeLxyt1H5MRnCjgjPU98SVBgs1ZZ?_gl=1*14tp105*_ga*NjIxMTA3OTI2LjE2OTgyOTk3MjA.*_ga_5RMPXG14TE*MTY5ODMwODExNC4yLjEuMTY5ODMwODI4OS40Ni4wLjA."} style={{width: '33%', marginBottom: '2vh'}}/>
         <img className="img-fluid rounded-3" alt='photo3' src={"https://red-thin-mammal-568.mypinata.cloud/ipfs/QmXRmTXHgTDY5wDjoHs6CHHBkmnWR95CrP4arydaPvZ1Vd?_gl=1*1xkm7go*_ga*NjIxMTA3OTI2LjE2OTgyOTk3MjA.*_ga_5RMPXG14TE*MTY5ODMwODExNC4yLjEuMTY5ODMwODI4NS41MC4wLjA."} style={{width: '33%', marginBottom: '2vh'}}/>
        
        {/* FOURTH ROW */}
        <img className="img-fluid rounded-3" alt='photo3' src={"https://red-thin-mammal-568.mypinata.cloud/ipfs/Qmce9vcJv7cFZ7bm1KNag71z6C3KRqjkdMbCCA4Uq1Qg5q?_gl=1*ept4ob*_ga*NjIxMTA3OTI2LjE2OTgyOTk3MjA.*_ga_5RMPXG14TE*MTY5ODMxNTk1NC4zLjEuMTY5ODMxNjIzNC4zMi4wLjA."} style={{width: '33%', marginBottom: '2vh'}}/>
        <img className="img-fluid rounded-3" alt='photo3' src={"https://red-thin-mammal-568.mypinata.cloud/ipfs/QmZhQinSehafedm1sf95A7V5fnp2DLdu7WfMTRuQZ5r4NF?_gl=1*rtao21*_ga*NjIxMTA3OTI2LjE2OTgyOTk3MjA.*_ga_5RMPXG14TE*MTY5ODMxNTk1NC4zLjEuMTY5ODMxNjAwNi44LjAuMA.."} style={{width: '33%', marginBottom: '2vh'}}/>
        <img className="img-fluid rounded-3" alt='photo3' src={"https://red-thin-mammal-568.mypinata.cloud/ipfs/QmZq62KiHpKZZE6PsryMVgH83HnmqRVeMcHUamHpSoZLEv?_gl=1*ggfgio*_ga*NjIxMTA3OTI2LjE2OTgyOTk3MjA.*_ga_5RMPXG14TE*MTY5ODMxNTk1NC4zLjEuMTY5ODMxNjAwMy4xMS4wLjA."} style={{width: '33%', marginBottom: '2vh'}}/>
        
      </div>
    </div>
  )
}

export default Gallery