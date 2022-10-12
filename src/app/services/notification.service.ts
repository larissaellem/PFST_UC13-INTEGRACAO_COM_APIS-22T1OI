import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";

type SnackBarStyles = "success" | "error" | "warning" | "info";
type OpenSnackBarOptions = {
  duration?: number;
  style?: SnackBarStyles;
};

@Injectable({
  providedIn: "root",
})
export class NotificationService {
  constructor(private readonly snackBar: MatSnackBar) {}

  openSnackBar(message: string, options: OpenSnackBarOptions = {}) {
    this.snackBar.open(message, "", {
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: this.chooseSnackBarStyle(options.style || "success"),
      duration: options.duration || 5000,
    });
  }

  private chooseSnackBarStyle(style: SnackBarStyles) {
    const styles = {
      success: () => ["text-white", "bg-success"],
      error: () => ["text-white", "bg-danger"],
      warning: () => ["text-white", "bg-warning"],
      info: () => ["text-white", "bg-info"],
    };
    return styles[style]();
  }
}
