import { Card, CardBody, Col } from 'reactstrap';
import AceEditor from 'react-ace';
import 'ace-builds/src-noconflict/mode-java';
import 'ace-builds/src-noconflict/theme-monokai';
import 'ace-builds/src-noconflict/ext-language_tools';
import { JavascriptModeTitle } from '@/Constant';
import CommonCardHeader from '@/CommonComponent/CommonCardHeader';
import { javaData } from '@/Data/Miscellaneous/Editors/Editors';

const JavascriptMode = () => {
  return (
      <Col xl={6}>
        <Card>
          <CommonCardHeader title={JavascriptModeTitle} headClass='pb-0' />
          <CardBody>
            <AceEditor 
            className="aceEditor w-auto"
            mode='javascript' 
            theme='monokai' 
            value={javaData} 
            name='blah2' 
            setOptions={{ useWorker: false }} 
            fontSize={14} 
            showPrintMargin={true} 
            showGutter={true} 
            editorProps={{ $blockScrolling: true }} 
            highlightActiveLine={true} />
          </CardBody>
        </Card>
      </Col>
  );
};
export default JavascriptMode;