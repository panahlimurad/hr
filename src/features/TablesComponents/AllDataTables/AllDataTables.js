import React from 'react'
import styles from './style.module.css'
import ImportExportIcon from '@mui/icons-material/ImportExport';
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { shortText } from '../../utils/Functions/ShortText/shortText';
import Test from '../../images/usrbig.jpg'

const AllDataTables = () => {
  return (
    <div className="bg-bg-tables rounded-xl p-[15px] flex flex-col">
        <div className='flex justify-end'>
            <input className={styles.formInput} type='text' placeholder='Search'/>
        </div>
        <div>
      <table className={styles.tableContainer}>
        <thead>
          <tr className='flex justify-between items-center'>
            <th className={styles.tableThIcon} >
                #
                <ImportExportIcon/>
            </th>
            <th className={styles.tableTh}>Name</th>
            <th className={styles.tableTh}>Position</th>
            <th className={styles.tableTh}>Department</th>
            <th className={styles.tableTh}>Mobile</th>
            <th className={styles.tableTh}>Email</th>
            <th className={styles.tableTh}>Address</th>
            <th className={styles.tableTh}>Joining Date</th>
            <th className={styles.tableTh}>Action</th>
          </tr>
        </thead>
        <tbody>
            <tr className='flex justify-between items-center'>
              <td className={styles.tableThIcon}><img className={styles.imgTable} src={Test} alt='profile'/></td>
              <td className={styles.tableTd}>{shortText(13,"John Doe")}</td>
              <td className={styles.tableTd}>{shortText(13,"Front end Developer")}</td>
              <td className={styles.tableTd}>{shortText(13,"Software Engineer")}</td>
              <td className={styles.tableTd}>{shortText(13,"+994-55-830-00-00")}</td>
              <td className={styles.tableTd}>{shortText(13,"example@gmail.com")}</td>
              <td className={styles.tableTd}>{shortText(13, "22,tilak appt. surat")}</td>
              <td className={styles.tableTd}>22 Feb 2000</td>
              <td className={styles.tableTd}>
                <EditIcon className={styles.iconEdit}/>
                <DeleteForeverIcon className={styles.iconDelete}/>
              </td>
            </tr>
        </tbody>
      </table>
    </div>
    </div>
  )
}

export default AllDataTables