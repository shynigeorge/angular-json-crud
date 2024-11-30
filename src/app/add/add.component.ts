import { Component } from '@angular/core';
import { Student } from '../student';
import { StudentService } from '../service/student.service';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add',
  standalone: true,
  imports: [FormsModule,RouterModule],
  templateUrl: './add.component.html',
  styleUrl: './add.component.css'
})
export class AddComponent {

  student: Student = { id:0 , name: '', course: '' };

  constructor(private studentService: StudentService, private router: Router) {}

  addStudent(): void {
    this.studentService.addStudent(this.student).subscribe(() => {
      this.router.navigate(['/list']);
    });
  }

}
