import React from 'react';
import { Modal, Button, Table } from 'react-bootstrap';

import { FaPlay, FaStepBackward, FaStepForward } from 'react-icons/fa';
import {
  BiHide,
  BiZoomIn,
  BiZoomOut,
  BiTime,
  BiCurrentLocation,
} from 'react-icons/bi';
import { AiFillSetting } from 'react-icons/ai';
import { ImBrightnessContrast, ImContrast } from 'react-icons/im';
import PropTypes from 'prop-types';

function HelpModal({ show, onHide }) {
  return (
    <Modal
      show={show}
      onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title
          id="contained-modal-title-vcenter"
          className="f-modal_title f-ja"
        >
          ヘルプ
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Table striped bordered>
          <tbody className="help-modal-table">
            <tr>
              <td>
                <FaPlay size={28} color="#5c636a" />
              </td>
              <td>
                <h4 className="f-modal_title_sub f-ja">
                  ブリンクを開始/停止します。sキーでも同じことができます
                </h4>
              </td>
            </tr>
            <tr>
              <td style={{ whiteSpace: 'nowrap' }}>
                <FaStepBackward size={28} color="#5c636a" />
                <FaStepForward size={28} color="#5c636a" />
              </td>
              <td>
                <h4 className="f-modal_title_sub f-ja">
                  ページを移動します。左右キーでも同じことができます
                </h4>
              </td>
            </tr>
            <tr>
              <td
                className="f-en"
                style={{ align: 'center', fontSize: '150%', color: '#5c636a' }}
              >
                sec
              </td>
              <td>
                <h4 className="f-modal_title_sub f-ja">
                  ブリンク速度を調節できます。入力欄をクリックしてプルダウンリストから速度を選べます
                </h4>
              </td>
            </tr>
            <tr>
              <td style={{ whiteSpace: 'nowrap' }}>
                <BiZoomIn size={28} color="#5c636a" />
                <BiZoomOut size={28} color="#5c636a" />
              </td>
              <td>
                <h4 className="f-modal_title_sub f-ja">
                  画像の拡大縮小をします。上下キーでも同じことができます
                </h4>
              </td>
            </tr>
            <tr>
              <td>
                <BiHide size={28} color="#5c636a" />
              </td>
              <td>
                <h4 className="f-modal_title_sub f-ja">
                  天体の枠、天体番号を非表示にします
                </h4>
              </td>
            </tr>
            <tr>
              <td
                className="f-en"
                style={{ align: 'center', fontSize: '150%', color: '#5c636a' }}
              >
                1
              </td>
              <td>
                <h4 className="f-modal_title_sub f-ja">
                  画像番号です。現在の画像の番号は灰色の背景になります。クリックすることでその画像に移動できます
                </h4>
              </td>
            </tr>
            <tr>
              <td>
                <AiFillSetting size={28} color="#5c636a" />
              </td>
              <td>
                <h4 className="f-modal_title_sub f-ja">
                  設定モーダルを開きます。画像の表示有無・画像のマスクの有無・手動測定モードでの拡大率・オートセーブの有無を選べます
                </h4>
              </td>
            </tr>
            <tr>
              <td>
                <ImBrightnessContrast size={28} color="#5c636a" />
              </td>
              <td>
                <h4 className="f-modal_title_sub f-ja">
                  画像の輝度を調節できる調節バーです
                </h4>
              </td>
            </tr>
            <tr>
              <td>
                <ImContrast size={28} color="#5c636a" />
              </td>
              <td>
                <h4 className="f-modal_title_sub f-ja">
                  画像のコントラストを調節できる調節バーです
                </h4>
              </td>
            </tr>
            <tr>
              <td>
                <BiTime size={28} color="#5c636a" />
              </td>
              <td>
                <h4 className="f-modal_title_sub f-ja">
                  表示している画像の撮影時刻です
                </h4>
              </td>
            </tr>
            <tr>
              <td>
                <BiCurrentLocation size={28} color="#5c636a" />
              </td>
              <td>
                <h4 className="f-modal_title_sub f-ja">
                  マウスポインタの位置における画像のピクセル座標です
                </h4>
              </td>
            </tr>
          </tbody>
        </Table>
      </Modal.Body>
      <Modal.Footer style={{ display: 'flex', justifyContent: 'center' }}>
        <Button onClick={onHide} className="btn-style box_border_gray f-ja">
          閉じる
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default HelpModal;

HelpModal.propTypes = {
  show: PropTypes.bool.isRequired,
  onHide: PropTypes.func.isRequired,
};
