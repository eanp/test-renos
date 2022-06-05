
import { createRef, useCallback, useEffect } from "react";
import './modal.css'

export const Modal = ({ open, onClose, header, body, footer }) => {
    const drawerRef = createRef();
  
    useEffect(() => {
      if (drawerRef && open) {
        drawerRef.current.focus();
      }
    }, [drawerRef, open]);
  
    const handleKeyDown = useCallback(
      (e) => {
        if (e.key === "Escape") {
          onClose();
        }
      },
      [onClose]
    );
  
    if (!open) return null;
    return (
      <div ref={drawerRef} onKeyDown={handleKeyDown} tabIndex={-1}>
        <div className="modal_blocker" onClick={()=>onClose()}>
        </div>
        <div className="modal">
            <div className="modal_content">
                <div className="modal_header">
                <div dangerouslySetInnerHTML={{ __html: header.type }} />
                    <span className="close" onClick={()=>onClose()}>&times;</span>
                </div>
                <div className="modal_body">
                <div className="modal_body_text" dangerouslySetInnerHTML={{ __html: body.type }} />
                </div>
                <div className="modal_footer">
                <div dangerouslySetInnerHTML={{ __html: footer.type }} />
                </div>
            </div>
        </div>
      </div>
    );
  };

  