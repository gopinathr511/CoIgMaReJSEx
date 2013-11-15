<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class DataOPs extends CI_Model {

	public function __construct() {
	
		parent::__construct();
		
	}
   
    public function getCSVText()
   {
		$this->load->dbutil();
		$query = $this->db->query("show fields from coigexg1.LoginAccs");
		$delimiter = ",";
		$newline = "\r\n";
		$csvt=$this->dbutil->csv_from_result($query, $delimiter, $newline); 
		return $csvt;
   }
   
    public function getExtracted( $data ) {
	
		if( array_key_exists( 'where', $data ) ){
		
			$req = $this->db->get_where( $data[ 'tableName' ], $data[ 'where' ] );
			
		} else {
		
			$req = $this->db->get( $data[ 'tableName' ] );
			
		}

		foreach( $req->result_array() as $row ) {
		
		   $result1[ 'id' ] = $row[ 'id' ];
		   
		   $result1[ 'textmsg' ] = $row[ 'textmsg' ];
		   
		   $result[] = $result1;
		   
		}
		
		return $result;
		
	}
	
	public function getDeleted( $data ) {
		
		$req = $this->db->delete( $data[ 'tableName' ], $data[ 'where' ] );
		
		$result[ 'result' ] = 'success';
		
		return $result;
		
	}
	
	public function getUpdated( $data ) {
		
		$req = $this->db->update( $data[ 'tableName' ], $data[ 'records' ], $data[ 'where' ] );
		
		$result[ 'result' ] = 'success';
		
		return $result;
		
	}
	
	public function getInserted( $data ) {
		
		$req = $this->db->insert( $data[ 'tableName' ], $data[ 'records' ] );
		
		$res = $data[ 'records' ];
		
		$result[ 'textmsg' ] = $res[ 'textmsg' ];
		
		return $result;
		
	}
	
	public function getLoginChecker( $data ) {
	
		$req = $this->db->get_where( $data[ 'tableName' ], $data[ 'where' ] );
		
		if( $req->num_rows() > 0 ) {
		
			$result[ 'result' ] = 'success';
			
		} else {
		
			$result[ 'result' ] = 'failure';
			
		}
		
		return $result;
		
	}
	
	public function getUsernameChecker( $data ) {
	
		$req = $this->db->get_where( $data[ 'tableName' ], $data[ 'where' ] );
		
		if( $req->num_rows() == 0 ) {
		
			$result[ 'result' ] = 'success';
			
		} else {
		
			$result[ 'result' ] = 'failure';
			
		}
		
		return $result;
		
	}
	
	public function setUserDet1( $data ) {
		
		$req = $this->db->insert( $data[ 'tableName1' ], $data[ 'tableData1' ] );
		
		$req = $this->db->insert( $data[ 'tableName2' ], $data[ 'tableData2' ] );
		
		$result[ 'result' ] = 'success';
		
		return $result;
    }
}


/* End of file DataOPs.php */
/* Location: ./application/models/DataOPs.php */