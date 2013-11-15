<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class MainController extends CI_Controller {

	/**
	 * Index Page for this controller.
	 *
	 * Maps to the following URL
	 * 		http://example.com/index.php/welcome
	 *	- or -  
	 * 		http://example.com/index.php/welcome/index
	 *	- or -
	 * Since this controller is set as the default controller in 
	 * config/routes.php, it's displayed at http://example.com/
	 *
	 * So any other public methods not prefixed with an underscore will
	 * map to /index.php/welcome/<method_name>
	 * @see http://codeigniter.com/user_guide/general/urls.html
	 */
	public function index()
	{
	
		$dat[ 'maincontP' ] = 'Sample/sampleTemplate';
		
		$dat[ 'scriptP' ] = 'Sample/sampleScripts';
		
		$this->load->view( 'Page/Main_Template', $dat );
		
	}
	
	public function indexer()
	{
	
		$dat[ 'maincontP' ] = 'Sample/sampleTemplate';
		
		$dat[ 'scriptP' ] = 'Sample/sampleScripts';
		
		$this->load->view( 'Page/Main_Template', $dat );
		
	}	
	
	public function checkCon()
	{
	
		$dat[ 'maincontP' ] = 'Page/checkbox';
		
		$dat[ 'scriptP' ] = 'Sample/sampleScripts';
		
		$this->load->view( 'Page/Main_Template', $dat );
		
	}
	
	public function navigCon()
	{
	
		$dat[ 'maincontP' ] = 'Page/navigation';
		
		$dat[ 'scriptP' ] = 'Sample/sampleScripts';
		
		$this->load->view( 'Page/Main_Template', $dat );
		
	}
	
	public function dataOpns()
	{
	
		$this->load->model( 'DataOps' );
		
			/** READ **/
		
		if ( $_SERVER[ 'REQUEST_METHOD' ] == "GET" ) {
			
			if( array_key_exists( 'id', $_GET ) ){
			
				$where[ 'id' ] = $this->input->get( 'id' );
				
				$data[ 'where' ] = $where;
				
			}
			
			$data[ 'tableName' ] = 'exampletable';
		
			$sqlq = $this->DataOps->getExtracted( $data );
			
			echo json_encode( $sqlq );
			
		}
		
	    else if ( $_SERVER[ 'REQUEST_METHOD' ] == "POST" ) {
			
				/** DELETE **/
			
			if ( array_key_exists( '_method', $_POST ) && $_POST[ "_method" ] == "DELETE" ) {
			
				$queryStrings = explode( '&', $_SERVER[ 'QUERY_STRING' ] );

				foreach( $queryStrings as $queryString ) {
				
					$query1 = explode( '=', $queryString );
					
					$queryList[ $query1[ 0 ] ] = $query1[ 1 ];
					
				}
				
				$data1[ 'where' ] = $queryList;
				
				$data1[ 'tableName' ] = 'exampletable';
				
				$sqlq = $this->DataOps->getDeleted( $data1 );
				
				echo json_encode( $sqlq );
				
			}
			
				/** UPDATE **/
			
			else if ( array_key_exists( '_method', $_POST ) && $_POST[ "_method" ] == "PUT" ) {
				
				$recordData = json_decode( stripslashes( $_POST[ 'model' ] ), true );
				
				$wherec[ 'id' ] = $recordData[ 'id' ];
				
				$data2[ 'records' ] = $recordData;
				
				$data2[ 'where' ] = $wherec;
				
				$data2[ 'tableName' ] = 'exampletable';
				
				$sqlq = $this->DataOps->getUpdated( $data2 );
				
				echo json_encode( $sqlq );
				
			}
			
				/** CREATE ( INSERT ) **/
			
			else {
				
				$recordData = json_decode( stripslashes( $_POST[ 'model' ] ), true );
				
				$recordData[ 'id' ] = '';
				
				$data3[ 'tableName' ] = 'exampletable';
				
				$data3[ 'records' ] = $recordData;
				
				$sqlq = $this->DataOps->getInserted( $data3 );

				echo json_encode( $sqlq );
			}
			
		}
		
	}
	
	public function loginChecker() {
	
		$usen = $this->input->post( 'usernames' );
		
		$passn = $this->input->post( 'passwords' );
		
		$this->load->model( 'DataOps' );
		
		$where[ 'usernames' ] = $usen;
		
		$where[ 'passwords' ] = $passn;
		
		$data[ 'where' ] = $where;
		
		$data[ 'tableName' ] = 'examplelogin';
	
		$sqlq = $this->DataOps->getLoginChecker( $data );
		
		$sqlq[ 'userName' ] = $usen;
		
		echo json_encode( $sqlq );
		
	}
	
	public function usernameChecker() {
	
		$usen = $this->input->post( 'usernames' );
		
		$this->load->model( 'DataOps' );
		
		$where[ 'usernames' ] = $usen;
		
		$data[ 'where' ] = $where;
		
		$data[ 'tableName' ] = 'reg_members';
	
		$sqlq = $this->DataOps->getUsernameChecker( $data );
		
		echo json_encode( $sqlq );
		
	}
	
	public function regnDetails() {	
		
		$data[ 'tableName1' ] = 'reg_members';
		
		$data[ 'tableData1' ] = $this->input->post( 'tableData1' );
		
		$data[ 'tableName2' ] = 'examplelogin';
		
		$data[ 'tableData2' ] =$this->input->post( 'tableData2' );
		
		$this->load->model( 'DataOps' );
		
		$sqlq = $this->DataOps->setUserDet1( $data );
		
		$record2 = $data[ 'tableData2' ];
		
		$sqlq[ 'userName' ] = $record2[ 'usernames' ];
		
		echo json_encode( $sqlq );
		
	}
	
}

/* End of file mainContoller.php */
/* Location: ./application/controllers/MainControl/mainContoller.php */