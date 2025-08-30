use std::{thread::sleep, time::Duration};

use tauri::{
    tray::{MouseButton, MouseButtonState, TrayIconBuilder, TrayIconEvent},
    Emitter, Manager, PhysicalPosition, WindowEvent,
};
pub fn set(app: &mut tauri::App) {
    TrayIconBuilder::new()
        .icon(app.default_window_icon().unwrap().clone())
        .tooltip("Neobox")
        .build(app)
        .unwrap();

    let window = app.get_webview_window("tray").unwrap();
    let monitor = window.current_monitor().unwrap().unwrap();
    let monitor_size = monitor.size();
    let window_size = window.outer_size().unwrap();

    window
        .set_position(PhysicalPosition {
            x: monitor_size.width - window_size.width + 1,
            y: monitor_size.height - window_size.height - 72,
        })
        .unwrap();

    let window_handle = window.clone();
    window.on_window_event(move |event| match event {
        WindowEvent::Focused(focused) => {
            if !focused {
                window_handle.emit("tray", "unfocus").unwrap();
            } else {
                window_handle.emit("tray", "open").unwrap();
            }
        }

        WindowEvent::CloseRequested { api, .. } => {
            api.prevent_close();
            window_handle.hide().unwrap();
        }
        _ => {}
    });

    app.on_tray_icon_event(move |app, event| {
        match event {
            TrayIconEvent::Click {
                position: _,
                button_state,
                button,
                ..
            } => {
                if button == MouseButton::Right {
                    if button_state == MouseButtonState::Down {
                        // window.move_window(Position::TrayCenter).unwrap();
                        if !window.is_visible().unwrap() {
                            open_tray(app.app_handle().clone()).unwrap();
                        } else {
                            app.emit("tray", "close").unwrap();
                            sleep(Duration::from_millis(500));
                            window.hide().unwrap();
                        }
                    }
                }

                if button == MouseButton::Left {
                    if button_state == MouseButtonState::Down {
                        let window = app.get_webview_window("overlay").unwrap();

                        if !window.is_visible().unwrap() {
                            window.show().unwrap();
                            window.set_focus().unwrap();
                        } else {
                            window.hide().unwrap();
                        }
                    }
                }
            }
            _ => {}
        }
    });
}

#[tauri::command]
pub fn open_tray(app: tauri::AppHandle) -> Result<(), String> {
    let window: tauri::WebviewWindow = app.get_webview_window("tray").unwrap();

    if !window.is_visible().unwrap() {
        window.show().unwrap();
        let _ = app.emit("tray", "open");
        window.set_focus().unwrap();
    } else {
        if !window.is_focused().unwrap() {
            window.set_focus().unwrap();
            app.emit("tray", "open").unwrap();
        } else {
            app.emit("tray", "close").unwrap();
            sleep(Duration::from_millis(500));
            window.hide().unwrap();
        }
    }
    Ok(())
}